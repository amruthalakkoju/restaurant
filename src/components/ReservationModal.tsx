import React from 'react';
import { ReservationForm } from './ReservationForm';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  experience = '',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#13131c] border border-[#d4af37]/40 rounded-sm p-6 sm:p-10 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#ded8c8] hover:text-[#d4af37] bg-[#1a1a26] rounded-sm transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Instant Table Booking
            </span>
            <span className="w-6 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#f6f3eb]">
            Reserve Your Experience at AURA
          </h2>
          {experience && (
            <div className="mt-2 text-xs text-[#ebdca7] italic">
              Booking selection: {experience}
            </div>
          )}
        </div>

        <ReservationForm initialExperience={experience} isModal={true} />
      </div>
    </div>
  );
};
