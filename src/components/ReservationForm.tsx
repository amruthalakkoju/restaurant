import React, { useState } from 'react';
import { ReservationFormData, ConfirmedReservation } from '../types';
import { Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';

interface ReservationFormProps {
  initialExperience?: string;
  onSuccess?: (reservation: ConfirmedReservation) => void;
  isModal?: boolean;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  initialExperience = '',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
    time: '19:30',
    guests: 2,
    seatingArea: 'Main Dining Room',
    specialRequests: initialExperience ? `Booking requested for: ${initialExperience}` : '',
    specialExperience: initialExperience,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedData, setConfirmedData] = useState<ConfirmedReservation | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for confirmation.';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.date) {
      errs.date = 'Please select a dining date.';
    }
    if (!formData.time) {
      errs.time = 'Please select a preferred time slot.';
    }
    if (formData.guests < 1) {
      errs.guests = 'At least 1 guest required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury booking reservation processing (frontend state)
    setTimeout(() => {
      const code = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
      const confirmation: ConfirmedReservation = {
        ...formData,
        confirmationCode: code,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setConfirmedData(confirmation);
      setIsSubmitting(false);

      if (onSuccess) {
        onSuccess(confirmation);
      }
    }, 600);
  };

  if (confirmedData) {
    return (
      <div className="text-center py-8 px-4 sm:px-6 bg-[#161622] border border-[#d4af37]/40 rounded-sm animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37] mx-auto flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#d4af37]" />
        </div>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
          Request Received
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#f6f3eb] mb-4">
          Reservation Request Confirmed
        </h3>

        <div className="inline-block px-4 py-2 bg-[#0c0c0f] border border-[#d4af37]/30 rounded-sm mb-6">
          <span className="text-xs text-[#a9a5b3] mr-2">Booking Reference:</span>
          <span className="font-mono text-sm font-bold text-[#ebdca7] tracking-wider">
            {confirmedData.confirmationCode}
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#ded8c8] font-light max-w-lg mx-auto leading-relaxed mb-6">
          “Your reservation request has been received. The AURA team will contact you shortly to confirm your table.”
        </p>

        <div className="p-4 bg-[#111118] border border-white/5 rounded-sm max-w-md mx-auto text-left text-xs space-y-2 mb-8 text-[#a9a5b3]">
          <div className="flex justify-between">
            <span>Guest:</span>
            <span className="text-[#f6f3eb] font-medium">{confirmedData.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Date & Time:</span>
            <span className="text-[#f6f3eb] font-medium">
              {confirmedData.date} at {confirmedData.time}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Party Size:</span>
            <span className="text-[#f6f3eb] font-medium">{confirmedData.guests} Guests</span>
          </div>
          <div className="flex justify-between">
            <span>Seating Preference:</span>
            <span className="text-[#d4af37] font-medium">{confirmedData.seatingArea}</span>
          </div>
          {confirmedData.specialRequests && (
            <div className="flex justify-between border-t border-white/5 pt-2">
              <span>Notes:</span>
              <span className="text-[#ded8c8] italic">{confirmedData.specialRequests}</span>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            setConfirmedData(null);
            setFormData({
              name: '',
              phone: '',
              email: '',
              date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
              time: '19:30',
              guests: 2,
              seatingArea: 'Main Dining Room',
              specialRequests: '',
            });
          }}
          className="px-6 py-2.5 text-xs uppercase tracking-widest text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] rounded-sm transition-colors cursor-pointer font-semibold"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            placeholder="e.g. Priya Sharma"
            className={`w-full px-4 py-3 bg-[#111118] border rounded-sm text-sm text-[#f6f3eb] placeholder-[#6b6976] focus:outline-none transition-colors ${
              errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 bg-[#111118] border rounded-sm text-sm text-[#f6f3eb] placeholder-[#6b6976] focus:outline-none transition-colors ${
              errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2: Email and Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="priya@example.com"
            className={`w-full px-4 py-3 bg-[#111118] border rounded-sm text-sm text-[#f6f3eb] placeholder-[#6b6976] focus:outline-none transition-colors ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
            Number of Guests *
          </label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) })}
            className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-sm text-sm text-[#f6f3eb] focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16].map((num) => (
              <option key={num} value={num} className="bg-[#12121a]">
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Date, Time, and Seating Area */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
            Date *
          </label>
          <input
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-sm text-sm text-[#f6f3eb] focus:outline-none focus:border-[#d4af37] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
            Preferred Time *
          </label>
          <select
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-sm text-sm text-[#f6f3eb] focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
          >
            <optgroup label="Lunch Service" className="bg-[#12121a] text-[#d4af37]">
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="13:30">1:30 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="14:30">2:30 PM</option>
            </optgroup>
            <optgroup label="Dinner Service" className="bg-[#12121a] text-[#d4af37]">
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
              <option value="21:00">9:00 PM</option>
              <option value="21:30">9:30 PM</option>
              <option value="22:00">10:00 PM</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
            Seating Area
          </label>
          <select
            value={formData.seatingArea}
            onChange={(e) =>
              setFormData({
                ...formData,
                seatingArea: e.target.value as ReservationFormData['seatingArea'],
              })
            }
            className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-sm text-sm text-[#f6f3eb] focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
          >
            <option value="Main Dining Room" className="bg-[#12121a]">Main Dining Room</option>
            <option value="Oceanfront Terrace" className="bg-[#12121a]">Oceanfront Terrace</option>
            <option value="Chef's Table" className="bg-[#12121a]">Chef's Table (8 Seats)</option>
            <option value="Private Dining Suite" className="bg-[#12121a]">Private Dining Suite</option>
          </select>
        </div>
      </div>

      {/* Row 4: Special Requests */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-[#a9a5b3] mb-2 font-medium">
          Special Requests & Dietary Requirements
        </label>
        <textarea
          rows={3}
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          placeholder="Anniversary celebration, dietary restrictions (Jain/Gluten-Free), window table preference..."
          className="w-full px-4 py-3 bg-[#111118] border border-white/10 rounded-sm text-sm text-[#f6f3eb] placeholder-[#6b6976] focus:outline-none focus:border-[#d4af37] transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] active:bg-[#b8860b] transition-all rounded-sm shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
      >
        {isSubmitting ? (
          <span>Processing Request...</span>
        ) : (
          <span>Request Reservation</span>
        )}
      </button>

      <p className="text-[11px] text-center text-[#898696] font-light">
        A confirmation call or WhatsApp message will be sent to confirm your table timing.
      </p>
    </form>
  );
};
