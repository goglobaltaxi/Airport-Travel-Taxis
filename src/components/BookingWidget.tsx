'use client';

import { useState } from 'react';
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
    Users
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

export default function BookingWidget({ compact = false }: { compact?: boolean }) {
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const selectedVehicle = allVehicles.find((v) => v.id === vehicle);

    const nextStep = () => {
        if (step === 1 && (!pickup || !dropoff || !date || !time)) {
            alert('Please fill in trip details');
            return;
        }
        setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            alert('Please fill in all contact details');
            return;
        }

        setIsSubmitting(true);

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
            status: 'pending'
        };

        try {
            // 1. Save to Supabase
            const { error } = await supabase.from('bookings').insert([bookingData]);
            if (error) throw error;

            // 2. Send email notification (awaited with logging)
            try {
                const emailRes = await fetch('/api/booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookingData),
                });
                const emailData = await emailRes.json();
                console.log('📧 Email API response:', emailRes.status, emailData);
            } catch (emailErr) {
                console.error('📧 Email automation error:', emailErr);
            }

            setSubmitted(true);
            
            // 3. Redirect to WhatsApp
            const message = `Hi, I'd like to book a ride:\n\nName: ${name}\nPickup: ${pickup}\nDrop-off: ${dropoff}\nDate: ${date}\nTime: ${time}\nPassengers: ${passengers}\nVehicle: ${selectedVehicle?.category || 'Economy'}`;
            window.open(`https://wa.me/923057262461?text=${encodeURIComponent(message)}`, '_blank');

        } catch (error) {
            console.error('Error saving booking:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        { id: 1, name: 'Plan', icon: MapPin },
        { id: 2, name: 'vehicle', icon: Car },
        { id: 3, name: 'Confirm', icon: Check },
    ];

    if (submitted) {
        return (
            <div className="glass-card p-8 text-center animate-fade-in max-w-2xl mx-auto border-2 border-green-500/20">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold text-surface-900 mb-4">Request Sent!</h3>
                <p className="text-surface-600 text-lg mb-8">
                    Great choice! We've received your booking request for a <strong>{selectedVehicle?.category}</strong>. 
                    Redirecting you to WhatsApp now to finalize the details...
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="btn-outline"
                    >
                        Book New Ride
                    </button>
                    <a 
                        href={`https://wa.me/923057262461`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                        Chat on WhatsApp <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={`w-full max-w-4xl mx-auto ${compact ? '' : 'px-4'}`}>
            {/* Progress Bar */}
            <div className="mb-8 overflow-hidden">
                <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-200 -translate-y-1/2 z-0"></div>
                    <div 
                        className="absolute top-1/2 left-0 h-0.5 bg-primary-600 -translate-y-1/2 z-0 transition-all duration-500"
                        style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                    ></div>
                    
                    {steps.map((s) => {
                        const Icon = s.icon;
                        const isActive = step >= s.id;
                        const isCurrent = step === s.id;
                        
                        return (
                            <div key={s.id} className="relative z-10 flex flex-col items-center">
                                <div className={`
                                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                                    ${isActive ? 'bg-primary-600 text-white' : 'bg-surface-100 text-surface-400'}
                                    ${isCurrent ? 'ring-4 ring-primary-600/20 scale-110 shadow-lg' : ''}
                                `}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className={`text-[10px] uppercase tracking-wider font-bold mt-2 ${isActive ? 'text-primary-600' : 'text-surface-400'}`}>
                                    {s.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { icon: <Check className="w-3.5 h-3.5" />, label: 'Licensed Service' },
                    { icon: <Clock className="w-3.5 h-3.5" />, label: '24/7 Support' },
                    { icon: <Car className="w-3.5 h-3.5" />, label: 'Vetted Drivers' },
                    { icon: <Users className="w-3.5 h-3.5" />, label: '50K+ Happy Clients' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-2 bg-white/50 backdrop-blur-sm border border-surface-200 rounded-lg shadow-sm">
                        <div className="text-primary-600">{item.icon}</div>
                        <span className="text-[10px] font-bold text-surface-700 uppercase tracking-wider">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="mb-6 p-4 bg-primary-50 rounded-xl border border-primary-200 flex gap-3 text-left">
                <div className="text-primary-600 shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center font-bold text-sm">i</div>
                </div>
                <p className="text-sm text-surface-700 leading-relaxed">
                    <strong>Service Scope:</strong> Pre-booked airport transfers, intercity travel, and cross-border journeys. Street taxi hailing is not available.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card shadow-2xl border border-surface-200/50 backdrop-blur-xl overflow-hidden min-h-[480px] flex flex-col">
                {/* Header */}
                <div className="bg-surface-50/50 px-6 lg:px-8 py-4 border-b border-surface-200/50 flex justify-between items-center">
                    <h3 className="font-display text-lg font-bold text-surface-900">
                        {step === 1 && "Select Route"}
                        {step === 2 && "Choose Your vehicle"}
                        {step === 3 && "Final Details"}
                    </h3>
                    <span className="text-sm font-medium text-surface-500">
                        Step {step} of 3
                    </span>
                </div>

                <div className="p-6 lg:p-8 flex-grow">
                    {/* Step 1: Trip Details */}
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary-600" /> Pickup From
                                    </label>
                                    <div className="relative group">
                                        <input 
                                            required 
                                            type="text"
                                            list="locations-list"
                                            placeholder="Enter hotel, airport or address"
                                            value={pickup} 
                                            onChange={(e) => setPickup(e.target.value)} 
                                            className="input-field pl-4 bg-white group-hover:border-primary-300 transition-colors"
                                        />
                                        <datalist id="locations-list">
                                            {locations.map((loc) => (
                                                <option key={`l-${loc}`} value={loc} />
                                            ))}
                                        </datalist>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-red-500" /> Drop-off To
                                    </label>
                                    <div className="relative group">
                                        <input 
                                            required 
                                            type="text"
                                            list="locations-list"
                                            placeholder="Enter destination or hotel"
                                            value={dropoff} 
                                            onChange={(e) => setDropoff(e.target.value)} 
                                            className="input-field pl-4 bg-white group-hover:border-primary-300 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary-600" /> Date
                                    </label>
                                    <input 
                                        required 
                                        type="date" 
                                        value={date} 
                                        onChange={(e) => setDate(e.target.value)} 
                                        className="input-field px-4 bg-white cursor-pointer" 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary-600" /> Time
                                    </label>
                                    <input 
                                        required 
                                        type="time" 
                                        value={time} 
                                        onChange={(e) => setTime(e.target.value)} 
                                        className="input-field px-4 bg-white cursor-pointer" 
                                    />
                                    <p className="text-[10px] text-surface-500 font-medium leading-tight">
                                        * Please enter the local time of your pickup location.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <Users className="w-4 h-4 text-primary-600" /> Passengers
                                    </label>
                                    <select 
                                        value={passengers} 
                                        onChange={(e) => setPassengers(e.target.value)} 
                                        className="input-field px-4 bg-white cursor-pointer"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                                            <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Vehicle Selection */}
                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                                {allVehicles.map((v) => (
                                    <div 
                                        key={v.id}
                                        onClick={() => {
                                            setVehicle(v.id);
                                            setTimeout(() => setStep(3), 300); // 300ms delay for a smooth visual feedback
                                        }}
                                        className={`
                                            relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-300
                                            ${vehicle === v.id 
                                                ? 'border-primary-600 bg-primary-50/10 shadow-lg ring-1 ring-primary-600' 
                                                : 'border-surface-200 hover:border-primary-300 bg-white hover:bg-surface-50'}
                                        `}
                                    >
                                        {vehicle === v.id && (
                                            <div className="absolute top-2 right-2 w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-md">
                                                <Check className="w-3 h-3" />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-3">
                                            <div className="w-12 h-12 bg-surface-100 rounded-lg flex items-center justify-center text-surface-600">
                                                {v.category.includes('SUV') ? <Car className="w-6 h-6" /> : <Car className="w-6 h-6" />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-surface-900">{v.category}</h4>
                                                <p className="text-xs text-surface-500 line-clamp-1">{v.name}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-[10px] px-2 py-0.5 bg-surface-100 text-surface-600 rounded-full font-medium">
                                                        {v.passengers} Pax
                                                    </span>
                                                    <span className="text-[10px] px-2 py-0.5 bg-surface-100 text-surface-600 rounded-full font-medium">
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

                    {/* Step 3: Contact Info */}
                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="bg-surface-50 p-4 rounded-xl border border-surface-200 mb-6">
                                <h4 className="text-xs font-bold text-surface-400 uppercase tracking-widest mb-3">Trip Summary</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary-600 shrink-0" />
                                        <span className="truncate">{pickup}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary-600 shrink-0" />
                                        <span>{date} at {time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                                        <span className="truncate">{dropoff}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Car className="w-4 h-4 text-primary-600 shrink-0" />
                                        <span>{selectedVehicle?.category}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="label-text flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary-600" /> Full Name
                                    </label>
                                    <input 
                                        required 
                                        type="text" 
                                        placeholder="John Doe" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        className="input-field px-4" 
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="label-text flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-primary-600" /> Email Address
                                        </label>
                                        <input 
                                            required
                                            type="email" 
                                            placeholder="john@example.com" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            className="input-field px-4" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="label-text flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-primary-600" /> Phone / WhatsApp
                                        </label>
                                        <input 
                                            required 
                                            type="tel" 
                                            placeholder="+971 50..." 
                                            value={phone} 
                                            onChange={(e) => setPhone(e.target.value)} 
                                            className="input-field px-4" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="bg-surface-50/50 px-6 lg:px-8 py-6 border-t border-surface-200/50 flex gap-4">
                    {step > 1 && (
                        <button 
                            type="button"
                            onClick={prevStep}
                            className="bg-white text-surface-700 hover:bg-surface-100 px-6 rounded-xl border border-surface-300 font-bold transition-all flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                    )}
                    
                    {step < 3 ? (
                        <button 
                            type="button"
                            onClick={nextStep}
                            className="btn-primary flex-grow py-4 text-base shadow-xl flex items-center justify-center gap-3"
                        >
                            Continue <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                    ) : (
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn-primary flex-grow py-4 text-base shadow-xl flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Confirming...
                                </>
                            ) : (
                                <>
                                    Get Quote Now <Check className="w-5 h-5 text-white" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
