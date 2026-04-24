'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { vehicles as allVehicles } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import {
    Calendar,
    MapPin,
    User,
    Phone,
    Clock,
    ChevronRight,
    ChevronLeft,
    Check,
    Car,
    Mail,
    Users,
    ShieldCheck,
    Plane,
    CreditCard,
    Banknote,
} from 'lucide-react';

const locations = [
    'Dubai, UAE',
    'Abu Dhabi, UAE',
    'Sharjah, UAE',
    'Riyadh, Saudi Arabia',
    'Jeddah, Saudi Arabia',
    'Dammam, Saudi Arabia',
    'Doha, Qatar',
    'Kuwait City, Kuwait',
    'Manama, Bahrain',
    'Muscat',
    'Dubai Airport (DXB)',
    'Abu Dhabi Airport (AUH)',
    'Riyadh Airport (RUH)',
    'Jeddah Airport (JED)',
    'King Abdulaziz Airport (Jeddah)',
    'King Khalid Airport (Riyadh)',
    'Hamad International Airport (Doha)',
    'King Fahd Airport (Dammam)',
    'Muscat Airport (MCT)',
];

const currencies = [
    { code: 'SAR', label: 'SAR — Saudi Riyal', flag: '🇸🇦' },
    { code: 'AED', label: 'AED — UAE Dirham', flag: '🇦🇪' },
    { code: 'KWD', label: 'KWD — Kuwaiti Dinar', flag: '🇰🇼' },
    { code: 'QAR', label: 'QAR — Qatari Riyal', flag: '🇶🇦' },
    { code: 'BHD', label: 'BHD — Bahraini Dinar', flag: '🇧🇭' },
    { code: 'OMR', label: 'OMR — Omani Rial', flag: '🇴🇲' },
    { code: 'USD', label: 'USD — US Dollar', flag: '🇺🇸' },
    { code: 'EUR', label: 'EUR — Euro', flag: '🇪🇺' },
    { code: 'GBP', label: 'GBP — British Pound', flag: '🇬🇧' },
];

export default function BookingWidget({ compact = false }: { compact?: boolean }) {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState('1');
    const [vehicle, setVehicle] = useState('economy');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currency, setCurrency] = useState('SAR');
    const [paymentMethod, setPaymentMethod] = useState('cash_to_driver');
    const [flightNumber, setFlightNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState<{ code: string; discount_type: string; discount_value: number; description?: string } | null>(null);
    const [promoError, setPromoError] = useState('');
    const [promoLoading, setPromoLoading] = useState(false);
    const [step1Error, setStep1Error] = useState('');
    const [submitError, setSubmitError] = useState('');

    const selectedVehicle = allVehicles.find((v) => v.id === vehicle);

    const today = new Date().toISOString().split('T')[0];

    const nextStep = () => {
        if (step === 1) {
            if (!pickup || !dropoff || !date || !time) {
                setStep1Error('Please complete all fields before continuing.');
                return;
            }
        }
        setStep1Error('');
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const applyPromo = async () => {
        if (!promoCode.trim()) return;
        setPromoLoading(true);
        setPromoError('');
        setPromoApplied(null);
        try {
            const res = await fetch('/api/promo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: promoCode.trim() }),
            });
            const data = await res.json();
            if (data.valid) {
                setPromoApplied(data);
            } else {
                setPromoError(data.error || 'Invalid promo code');
            }
        } catch {
            setPromoError('Could not validate code. Try again.');
        } finally {
            setPromoLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !phone) return;

        setIsSubmitting(true);

        // Capture utm_source from URL
        const params = new URLSearchParams(window.location.search);
        const utm_source = params.get('utm_source') || 'direct';

        const bookingData = {
            pickup_location: pickup,
            dropoff_location: dropoff,
            pickup_date: date,
            pickup_time: time,
            passengers: parseInt(passengers),
            vehicle_type: selectedVehicle?.category || 'Economy',
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            currency,
            payment_method: paymentMethod,
            flight_number: flightNumber || null,
            promo_code: promoApplied?.code || null,
            status: 'pending',
            utm_source: utm_source
        };

        setSubmitError('');
        try {
            // 1. Save to Supabase
            const { data: savedBooking, error } = await supabase
                .from('bookings')
                .insert([bookingData])
                .select()
                .single();
            if (error) throw error;

            // 2. Send email notification via Resend
            try {
                const emailRes = await fetch('/api/booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...bookingData,
                        booking_id_serial: savedBooking?.booking_id_serial,
                    }),
                });
                const emailData = await emailRes.json();
                console.log('Email API response:', emailRes.status, emailData);
            } catch (emailErr) {
                console.error('Email automation error:', emailErr);
            }

            // 3. Redirect to confirmation page
            const ref = savedBooking?.booking_id_serial
                ? `ATT-${savedBooking.booking_id_serial.toString().padStart(4, '0')}`
                : 'ATT-XXXX';
            router.push(`/booking/confirmed/?ref=${encodeURIComponent(ref)}&name=${encodeURIComponent(name)}`);

        } catch (error: any) {
            console.error('Error saving booking:', error);
            setSubmitError('Something went wrong. Please try WhatsApp instead.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        { id: 1, name: 'Details', icon: MapPin },
        { id: 2, name: 'Fleet', icon: Car },
        { id: 3, name: 'Reserve', icon: Check },
    ];

    return (
        <div className={`w-full max-w-4xl mx-auto ${compact ? '' : 'px-4'}`}>
            {/* Progress Bar */}
            <div className="mb-10 overflow-hidden pt-4">
                <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-200 -translate-y-1/2 rounded-full"></div>
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 -translate-y-1/2 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                        style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                    ></div>

                    {steps.map((s) => {
                        const Icon = s.icon;
                        const isActive = step >= s.id;
                        const isCurrent = step === s.id;

                        return (
                            <div key={s.id} className="relative z-10 flex flex-col items-center group">
                                <div className={`
                                    w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500
                                    ${isActive
                                        ? 'bg-primary-900 text-gold-400 shadow-xl border border-primary-800'
                                        : 'bg-white text-surface-400 border border-surface-200'}
                                    ${isCurrent ? 'ring-4 ring-gold-500/20 scale-110' : ''}
                                `}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className={`text-[11px] uppercase tracking-widest font-bold mt-4 transition-colors duration-300 ${isActive ? 'text-primary-900' : 'text-surface-400'}`}>
                                    {s.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: <ShieldCheck className="w-4 h-4" />, label: 'Licensed Service' },
                    { icon: <Clock className="w-4 h-4" />, label: '24/7 Support' },
                    { icon: <Car className="w-4 h-4" />, label: 'Vetted Drivers' },
                    { icon: <Users className="w-4 h-4" />, label: 'VIP Experience' },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 px-4 py-3 bg-white/60 backdrop-blur-md border border-surface-200 rounded-xl shadow-sm hover:border-gold-300 transition-colors">
                        <div className="text-gold-600 bg-gold-50 p-1.5 rounded-lg">{item.icon}</div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-primary-900 uppercase tracking-wider text-center sm:text-left">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="mb-8 p-5 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl border border-primary-950 flex gap-4 text-left shadow-lg">
                <div className="text-gold-400 shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm border border-white/20">i</div>
                </div>
                <p className="text-sm text-surface-200 leading-relaxed font-light">
                    <strong className="text-white font-medium">Exclusive Scope:</strong> We provide pre-booked executive airport transfers, intercity travel, and seamless cross-border journeys. Street hailing is not available.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card bg-white/95 overflow-hidden min-h-[500px] flex flex-col relative border-t-4 border-t-gold-500">
                {/* Header */}
                <div className="bg-surface-50 px-6 lg:px-10 py-6 border-b border-surface-200 flex justify-between items-center">
                    <h3 className="font-display text-2xl font-bold text-primary-900 tracking-tight">
                        {step === 1 && "Configure Your Journey"}
                        {step === 2 && "Select Executive Vehicle"}
                        {step === 3 && "Finalize Reservation"}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-200">
                        Step {step} of 3
                    </span>
                </div>

                <div className="p-6 lg:p-10 flex-grow bg-white">
                    {/* Step 1: Trip Details */}
                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-md bg-surface-100 flex items-center justify-center"><MapPin className="w-3.5 h-3.5 text-primary-900" /></div>
                                        Pickup Location
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        list="locations-list"
                                        placeholder="Enter hotel, airport or address"
                                        value={pickup}
                                        onChange={(e) => { setPickup(e.target.value); setStep1Error(''); }}
                                        className="input-field"
                                    />
                                    <datalist id="locations-list">
                                        {locations.map((loc) => (
                                            <option key={`l-${loc}`} value={loc} />
                                        ))}
                                    </datalist>
                                </div>

                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-md bg-gold-50 flex items-center justify-center"><MapPin className="w-3.5 h-3.5 text-gold-600" /></div>
                                        Drop-off Location
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        list="locations-list"
                                        placeholder="Enter destination or hotel"
                                        value={dropoff}
                                        onChange={(e) => { setDropoff(e.target.value); setStep1Error(''); }}
                                        className="input-field"
                                    />
                                </div>
                            </div>

                            <div className="w-full h-px bg-surface-200"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary-900" /> Date
                                    </label>
                                    <input
                                        required
                                        type="date"
                                        min={today}
                                        value={date}
                                        onChange={(e) => { setDate(e.target.value); setStep1Error(''); }}
                                        className="input-field cursor-pointer"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary-900" /> Time
                                    </label>
                                    <input
                                        required
                                        type="time"
                                        value={time}
                                        onChange={(e) => { setTime(e.target.value); setStep1Error(''); }}
                                        className="input-field cursor-pointer"
                                    />
                                    <p className="text-[11px] text-surface-500 font-medium leading-tight mt-1">* Local pickup time</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Users className="w-4 h-4 text-primary-900" /> Passengers
                                    </label>
                                    <select
                                        value={passengers}
                                        onChange={(e) => setPassengers(e.target.value)}
                                        className="input-field cursor-pointer appearance-none"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                                            <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Vehicle Selection */}
                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-h-[400px] overflow-y-auto pr-3 custom-scrollbar">
                                {allVehicles.map((v) => (
                                    <div
                                        key={v.id}
                                        onClick={() => {
                                            setVehicle(v.id);
                                            setTimeout(() => setStep(3), 300);
                                        }}
                                        className={`
                                            group relative cursor-pointer rounded-2xl p-5 border-[1.5px] transition-all duration-300
                                            ${vehicle === v.id
                                                ? 'border-gold-500 bg-gold-50/30 shadow-gold scale-[1.02]'
                                                : 'border-surface-200 hover:border-primary-900 bg-white hover:shadow-lg'}
                                        `}
                                    >
                                        {vehicle === v.id && (
                                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                                                <Check className="w-4 h-4" />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-4">
                                            <div className={`
                                                w-14 h-14 rounded-xl flex items-center justify-center transition-colors
                                                ${vehicle === v.id ? 'bg-white shadow-sm' : 'bg-surface-50 group-hover:bg-primary-50'}
                                            `}>
                                                <Car className={`w-7 h-7 ${vehicle === v.id ? 'text-gold-600' : 'text-primary-900'}`} />
                                            </div>
                                            <div>
                                                <h4 className="font-display font-bold text-lg text-primary-900 leading-tight mb-1">{v.category}</h4>
                                                <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider line-clamp-1">{v.name}</p>
                                                <div className="flex items-center gap-2 mt-4">
                                                    <span className="text-[10px] px-2.5 py-1 bg-surface-100 border border-surface-200 text-surface-700 rounded-md font-bold uppercase tracking-wide flex items-center gap-1">
                                                        <Users className="w-3 h-3" /> {v.passengers}
                                                    </span>
                                                    <span className="text-[10px] px-2.5 py-1 bg-surface-100 border border-surface-200 text-surface-700 rounded-md font-bold uppercase tracking-wide">
                                                        {v.luggage} Bags
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Contact + Payment Info */}
                    {step === 3 && (
                        <div className="space-y-7 animate-in fade-in slide-in-from-right-4 duration-500">
                            {/* Trip Summary */}
                            <div className="bg-primary-900 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Check className="w-4 h-4" /> Selected Itinerary
                                </h4>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-5 text-sm">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-surface-400 shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-surface-400 uppercase tracking-wider font-bold mb-0.5">From</span>
                                            <span className="text-white font-medium line-clamp-2">{pickup}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-4 h-4 text-surface-400 shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-surface-400 uppercase tracking-wider font-bold mb-0.5">Date & Time</span>
                                            <span className="text-white font-medium">{date} at {time}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-surface-400 uppercase tracking-wider font-bold mb-0.5">To</span>
                                            <span className="text-white font-medium line-clamp-2">{dropoff}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Car className="w-4 h-4 text-surface-400 shrink-0 mt-0.5" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-surface-400 uppercase tracking-wider font-bold mb-0.5">Vehicle</span>
                                            <span className="text-white font-medium">{selectedVehicle?.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Passenger Details */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-display font-bold text-primary-900 border-b border-surface-200 pb-2">Passenger Details</h4>
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary-900" /> Full Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="input-field"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="label-text flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-primary-900" /> Email Address
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="name@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="input-field"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="label-text flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-primary-900" /> Contact Number
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+971 50..."
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="input-field"
                                        />
                                    </div>
                                </div>

                                {/* Flight Number */}
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Plane className="w-4 h-4 text-primary-900" /> Flight Number
                                        <span className="text-surface-400 font-normal normal-case tracking-normal">(optional — for airport pickups)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. EK 204, SV 123"
                                        value={flightNumber}
                                        onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                                        className="input-field"
                                    />
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-display font-bold text-primary-900 border-b border-surface-200 pb-2">Payment Preferences</h4>

                                {/* Currency */}
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <CreditCard className="w-4 h-4 text-primary-900" /> Preferred Currency
                                    </label>
                                    <select
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                        className="input-field cursor-pointer appearance-none"
                                    >
                                        {currencies.map((c) => (
                                            <option key={c.code} value={c.code}>{c.flag} {c.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Payment Method */}
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Banknote className="w-4 h-4 text-primary-900" /> Payment Method
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            { value: 'cash_to_driver', label: 'Cash to Driver', desc: 'Pay on arrival', icon: '💵' },
                                            { value: 'online', label: 'Online Payment', desc: 'Card / Bank Transfer', icon: '💳' },
                                        ].map((method) => (
                                            <label
                                                key={method.value}
                                                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                    paymentMethod === method.value
                                                        ? 'border-primary-900 bg-primary-50'
                                                        : 'border-surface-200 hover:border-primary-300 bg-white'
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="payment_method"
                                                    value={method.value}
                                                    checked={paymentMethod === method.value}
                                                    onChange={() => setPaymentMethod(method.value)}
                                                    className="sr-only"
                                                />
                                                <span className="text-2xl">{method.icon}</span>
                                                <div>
                                                    <p className={`font-bold text-sm ${paymentMethod === method.value ? 'text-primary-900' : 'text-surface-700'}`}>{method.label}</p>
                                                    <p className="text-xs text-surface-500">{method.desc}</p>
                                                </div>
                                                <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === method.value ? 'border-primary-900 bg-primary-900' : 'border-surface-300'}`}>
                                                    {paymentMethod === method.value && <div className="w-2 h-2 bg-white rounded-full" />}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="space-y-2">
                                <label className="label-text flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-primary-900" /> Promo Code
                                    <span className="text-surface-400 font-normal normal-case tracking-normal">(optional)</span>
                                </label>
                                {promoApplied ? (
                                    <div className="flex items-center justify-between bg-green-50 border border-green-300 rounded-xl px-4 py-3">
                                        <div>
                                            <p className="text-sm font-bold text-green-700">✅ {promoApplied.code} applied</p>
                                            <p className="text-xs text-green-600">
                                                {promoApplied.discount_type === 'percent'
                                                    ? `${promoApplied.discount_value}% off`
                                                    : `${promoApplied.discount_value} off`}
                                                {promoApplied.description ? ` · ${promoApplied.description}` : ''}
                                            </p>
                                        </div>
                                        <button type="button" onClick={() => { setPromoApplied(null); setPromoCode(''); }} className="text-xs text-red-500 font-bold hover:underline">Remove</button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter promo code"
                                            value={promoCode}
                                            onChange={e => { setPromoCode(e.target.value.toUpperCase()); setPromoError(''); }}
                                            className="input-field flex-1 uppercase"
                                        />
                                        <button
                                            type="button"
                                            onClick={applyPromo}
                                            disabled={promoLoading || !promoCode.trim()}
                                            className="px-5 py-2.5 bg-primary-900 text-white font-bold rounded-xl text-sm hover:bg-black transition-colors disabled:opacity-50"
                                        >
                                            {promoLoading ? '...' : 'Apply'}
                                        </button>
                                    </div>
                                )}
                                {promoError && <p className="text-xs text-red-600 font-semibold">{promoError}</p>}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="bg-surface-50 px-6 lg:px-10 py-6 border-t border-surface-200 space-y-3">
                    {step1Error && (
                        <p className="text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 text-center">
                            {step1Error}
                        </p>
                    )}
                    {submitError && (
                        <p className="text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 text-center flex items-center justify-center gap-2">
                            {submitError}
                            <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="underline text-primary-600 font-bold">
                                WhatsApp
                            </a>
                        </p>
                    )}
                <div className="flex gap-4">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-white text-primary-900 hover:bg-surface-100 px-6 rounded-xl border-2 border-surface-300 font-bold transition-all flex items-center gap-2 uppercase tracking-wide text-sm"
                        >
                            <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                    )}

                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="btn-primary flex-grow text-base shadow-xl flex items-center justify-center gap-3 w-full uppercase tracking-wider bg-primary-900 text-white hover:bg-black"
                        >
                            Continue <ChevronRight className="w-5 h-5 text-gold-400" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary flex-grow text-base shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider bg-gradient-to-r from-gold-600 to-gold-400 text-primary-900 hover:from-gold-500 hover:to-gold-300 border border-gold-300"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-primary-900/30 border-t-primary-900 rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>Confirm Reservation</>
                            )}
                        </button>
                    )}
                </div>
                </div>
            </form>
        </div>
    );
}
