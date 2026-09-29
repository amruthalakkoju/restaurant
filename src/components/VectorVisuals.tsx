import React from 'react';

// Indian Food Safety & Standards Vegetarian Icon
export const VegIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <span
    aria-label="Vegetarian"
    className={`inline-flex items-center justify-center p-[2px] border border-emerald-500 rounded-[3px] bg-emerald-950/40 ${className}`}
    style={{ width: size, height: size }}
  >
    <span className="w-2 h-2 rounded-full bg-emerald-400 block shrink-0" />
  </span>
);

// Indian Food Safety & Standards Non-Vegetarian Icon
export const NonVegIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <span
    aria-label="Non-Vegetarian"
    className={`inline-flex items-center justify-center p-[2px] border border-red-500 rounded-[3px] bg-red-950/40 ${className}`}
    style={{ width: size, height: size }}
  >
    <span
      className="w-0 h-0 border-x-[4px] border-x-transparent border-b-[7px] border-b-red-400 block shrink-0"
      style={{ transform: 'translateY(-1px)' }}
    />
  </span>
);

// Royal Hyderabadi Dum Handi Vector Art
export const RoyalBiryaniVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    role="img"
    aria-label="Artisanal Royal Biryani Handi"
  >
    <defs>
      <linearGradient id="biryaniGold" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f7ebc6" />
        <stop offset="45%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#875817" />
      </linearGradient>
      <linearGradient id="biryaniClay" x1="200" y1="120" x2="200" y2="270" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3d1d17" />
        <stop offset="50%" stopColor="#251210" />
        <stop offset="100%" stopColor="#150a09" />
      </linearGradient>
      <radialGradient id="saffronGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#e59828" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#0c0c0f" stopOpacity="0" />
      </radialGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Ambient saffron illumination */}
    <ellipse cx="200" cy="180" rx="140" ry="80" fill="url(#saffronGlow)" />

    {/* Rising Saffron Aroma Trails */}
    <g opacity="0.75" stroke="#f5d485" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3">
      <path d="M170 120 C165 90, 185 70, 175 40" className="animate-pulse" />
      <path d="M200 110 C205 80, 190 60, 205 30" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <path d="M230 120 C235 90, 215 70, 225 45" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
    </g>

    {/* Golden Steam Plumes */}
    <g opacity="0.4" fill="url(#biryaniGold)">
      <circle cx="178" cy="50" r="12" />
      <circle cx="208" cy="38" r="16" />
      <circle cx="225" cy="52" r="10" />
    </g>

    {/* Base Shadow */}
    <ellipse cx="200" cy="265" rx="110" ry="14" fill="#000000" opacity="0.7" />

    {/* Brass Handi Pot Body */}
    <path
      d="M110 160 C110 230, 140 260, 200 260 C260 260, 290 230, 290 160 C290 148, 280 142, 260 142 L140 142 C120 142, 110 148, 110 160 Z"
      fill="url(#biryaniClay)"
      stroke="url(#biryaniGold)"
      strokeWidth="1.5"
    />

    {/* Handi Belly Highlight & Geometric Band */}
    <path
      d="M125 175 C150 185, 250 185, 275 175"
      stroke="url(#biryaniGold)"
      strokeWidth="1"
      strokeDasharray="4 2"
      opacity="0.8"
    />
    <path
      d="M135 195 C160 205, 240 205, 265 195"
      stroke="url(#biryaniGold)"
      strokeWidth="0.75"
      opacity="0.5"
    />

    {/* Brass Handles */}
    <path
      d="M110 155 C90 155, 85 175, 112 185"
      stroke="url(#biryaniGold)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M290 155 C310 155, 315 175, 288 185"
      stroke="url(#biryaniGold)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Golden Dum Rim with Dough Purdah (Sealed Lid) */}
    <ellipse cx="200" cy="142" rx="65" ry="12" fill="#d2a868" stroke="#f6dfa9" strokeWidth="1.5" />
    <path
      d="M135 142 Q200 130 265 142"
      stroke="#6b4515"
      strokeWidth="2.5"
      strokeDasharray="5 3"
      fill="none"
    />

    {/* Top Handi Lid & Crown Finial */}
    <path
      d="M150 140 C150 120, 180 115, 200 115 C220 115, 250 120, 250 140 Z"
      fill="url(#biryaniClay)"
      stroke="url(#biryaniGold)"
      strokeWidth="1.5"
    />
    <circle cx="200" cy="112" r="6" fill="url(#biryaniGold)" />
    <path d="M200 106 L200 100" stroke="url(#biryaniGold)" strokeWidth="2" strokeLinecap="round" />

    {/* Saffron & Whole Spices Accents */}
    <g transform="translate(190, 80)">
      {/* Star Anise silhouette */}
      <path
        d="M10 0 L13 6 L19 4 L16 10 L21 14 L15 17 L16 23 L10 20 L5 24 L6 18 L0 15 L6 11 L3 5 L9 7 Z"
        fill="#874719"
        opacity="0.8"
        transform="scale(0.8) translate(-10, -10)"
      />
    </g>

    {/* Bay leaf silhouette */}
    <path
      d="M135 125 C145 105, 160 100, 175 108 C165 122, 150 130, 135 125 Z"
      fill="#435e38"
      opacity="0.8"
      stroke="#678c57"
      strokeWidth="0.5"
    />
    {/* Saffron Strands */}
    <path d="M240 105 Q248 95 243 85" stroke="#e63946" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M246 110 Q255 100 252 90" stroke="#f4a261" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Smoked Paneer Tikka Skewer Vector Art
export const PaneerTikkaVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    role="img"
    aria-label="Charcoal Smoked Paneer Tikka"
  >
    <defs>
      <linearGradient id="paneerGold" x1="100" y1="100" x2="300" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff3db" />
        <stop offset="50%" stopColor="#f3c677" />
        <stop offset="100%" stopColor="#c8832a" />
      </linearGradient>
      <linearGradient id="charcoalGlow" x1="50" y1="200" x2="350" y2="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#22110c" />
        <stop offset="50%" stopColor="#3d180f" />
        <stop offset="100%" stopColor="#150a07" />
      </linearGradient>
    </defs>

    {/* Soft plate / tawa base */}
    <ellipse cx="200" cy="220" rx="145" ry="40" fill="#141418" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
    <ellipse cx="200" cy="220" rx="135" ry="34" fill="#0d0d10" />

    {/* Skewer Rod (Stainless steel / forged iron) */}
    <line x1="60" y1="200" x2="340" y2="90" stroke="#a09da8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="60" cy="200" r="5" fill="#d4af37" />

    {/* Embers / Smoked Grill Glow */}
    <g opacity="0.6">
      <circle cx="160" cy="180" r="2" fill="#ff7b00" className="animate-ping" style={{ animationDuration: '3s' }} />
      <circle cx="240" cy="140" r="2.5" fill="#ff5500" className="animate-ping" style={{ animationDuration: '2.5s' }} />
      <circle cx="210" cy="160" r="1.5" fill="#ffa200" />
    </g>

    {/* Bell Pepper 1 (Crimson) */}
    <rect x="100" y="165" width="22" height="26" rx="4" transform="rotate(-20 100 165)" fill="#b82d23" stroke="#871a12" />

    {/* Paneer Cube 1 */}
    <g transform="translate(130, 140) rotate(-18)">
      <rect x="0" y="0" width="36" height="34" rx="4" fill="url(#paneerGold)" stroke="#9c631d" strokeWidth="1" />
      {/* Char marks */}
      <line x1="6" y1="8" x2="30" y2="8" stroke="#3d1a08" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="18" x2="28" y2="18" stroke="#3d1a08" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="28" x2="26" y2="28" stroke="#3d1a08" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Onion Ribbon (Charred) */}
    <path d="M178 142 C185 130, 192 148, 185 158" stroke="#d5b8b8" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* Paneer Cube 2 (Center Hero) */}
    <g transform="translate(195, 115) rotate(-18)">
      <rect x="0" y="0" width="38" height="36" rx="4" fill="url(#paneerGold)" stroke="#b57624" strokeWidth="1.2" />
      {/* Char marks */}
      <line x1="6" y1="10" x2="32" y2="10" stroke="#3d1a08" strokeWidth="3" strokeLinecap="round" />
      <line x1="8" y1="20" x2="30" y2="20" stroke="#3d1a08" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="30" x2="28" y2="30" stroke="#3d1a08" strokeWidth="2.5" strokeLinecap="round" />
      {/* Deggi mirch dusting */}
      <circle cx="14" cy="14" r="1" fill="#c1121f" />
      <circle cx="24" cy="15" r="1.2" fill="#c1121f" />
      <circle cx="18" cy="25" r="1" fill="#c1121f" />
    </g>

    {/* Bell Pepper 2 (Green Capsicum) */}
    <rect x="245" y="112" width="22" height="26" rx="4" transform="rotate(-20 245 112)" fill="#386641" stroke="#224227" />

    {/* Paneer Cube 3 */}
    <g transform="translate(270, 90) rotate(-18)">
      <rect x="0" y="0" width="34" height="32" rx="4" fill="url(#paneerGold)" stroke="#9c631d" strokeWidth="1" />
      <line x1="6" y1="8" x2="28" y2="8" stroke="#3d1a08" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="18" x2="26" y2="18" stroke="#3d1a08" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Mint Chutney Katori Bowl (Foreground Left) */}
    <g transform="translate(90, 205)">
      <ellipse cx="30" cy="20" rx="25" ry="12" fill="#1b4332" stroke="#d4af37" strokeWidth="1" />
      <ellipse cx="30" cy="18" rx="22" ry="9" fill="#2d6a4f" />
      <ellipse cx="30" cy="17" rx="14" ry="5" fill="#52b788" opacity="0.8" />
      {/* Wild Mint Sprig */}
      <path d="M30 14 C33 8, 38 10, 36 14 C34 18, 31 16, 30 14 Z" fill="#95d5b2" />
      <path d="M30 14 C27 8, 22 10, 24 14 C26 18, 29 16, 30 14 Z" fill="#74c69d" />
    </g>

    {/* Pickled Beetroot Shallot & Charred Lemon Wedge */}
    <path d="M280 215 C295 210, 305 220, 298 230 C285 235, 275 225, 280 215 Z" fill="#ffb703" stroke="#d4af37" strokeWidth="0.75" />
    <ellipse cx="265" cy="230" rx="10" ry="7" fill="#6a040f" opacity="0.9" />
  </svg>
);

// Malabar Butter Garlic Prawns Vector Art
export const PrawnsVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    role="img"
    aria-label="Malabar Butter Garlic Coastal Prawns"
  >
    <defs>
      <linearGradient id="prawnAmber" x1="120" y1="80" x2="280" y2="220" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f38d68" />
        <stop offset="40%" stopColor="#e76f51" />
        <stop offset="80%" stopColor="#c85133" />
        <stop offset="100%" stopColor="#9a3219" />
      </linearGradient>
      <linearGradient id="butterGold" x1="150" y1="140" x2="250" y2="240" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff3b0" />
        <stop offset="50%" stopColor="#ffd166" />
        <stop offset="100%" stopColor="#e09f3e" />
      </linearGradient>
    </defs>

    {/* Slate Plate Base */}
    <ellipse cx="200" cy="200" rx="140" ry="50" fill="#141418" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
    <ellipse cx="200" cy="198" rx="125" ry="42" fill="#0d0d10" />

    {/* Clarified Butter & Garlic Emulsion Swirls */}
    <path
      d="M120 195 Q200 225 280 195 Q260 215 190 220 Q130 215 120 195 Z"
      fill="url(#butterGold)"
      opacity="0.7"
    />

    {/* Prawn 1 (Curved Coastal Bay Tiger Prawn) */}
    <g transform="translate(130, 95)">
      {/* Body Curl */}
      <path
        d="M20 50 C10 20, 45 5, 75 20 C100 35, 105 75, 75 90 C50 100, 30 85, 45 70 C55 60, 70 65, 70 50 C70 35, 45 25, 30 45 Z"
        fill="url(#prawnAmber)"
        stroke="#ffd166"
        strokeWidth="1"
      />
      {/* Tail Fin Fan */}
      <path d="M18 52 C5 48, 0 58, 8 68 C15 65, 20 58, 18 52 Z" fill="#e76f51" />
      <path d="M22 55 C12 65, 10 75, 22 78 C25 70, 24 60, 22 55 Z" fill="#d95d39" />
      {/* Shell Segmentation Ridges */}
      <path d="M55 18 C65 24, 75 32, 80 44" stroke="#ffedd8" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M68 28 C78 38, 85 50, 85 64" stroke="#ffedd8" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      {/* Delicate Antennae */}
      <path d="M75 90 Q95 105 110 115" stroke="#f4a261" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
    </g>

    {/* Prawn 2 (Interlocking Complement) */}
    <g transform="translate(200, 115) scale(0.9) rotate(40)">
      <path
        d="M20 50 C10 20, 45 5, 75 20 C100 35, 105 75, 75 90 C50 100, 30 85, 45 70 C55 60, 70 65, 70 50 C70 35, 45 25, 30 45 Z"
        fill="url(#prawnAmber)"
        stroke="#ffd166"
        strokeWidth="1"
      />
      <path d="M18 52 C5 48, 0 58, 8 68 C15 65, 20 58, 18 52 Z" fill="#e76f51" />
      <path d="M55 18 C65 24, 75 32, 80 44" stroke="#ffedd8" strokeWidth="1.2" opacity="0.8" />
    </g>

    {/* Crisped Malabar Curry Leaves */}
    <g transform="translate(180, 150) rotate(-15)">
      <path d="M0 10 C15 0, 30 2, 40 10 C30 20, 15 22, 0 10 Z" fill="#2d6a4f" stroke="#52b788" strokeWidth="0.5" />
      <line x1="0" y1="10" x2="38" y2="10" stroke="#74c69d" strokeWidth="0.6" />
    </g>
    <g transform="translate(225, 180) rotate(25)">
      <path d="M0 8 C12 0, 24 2, 32 8 C24 16, 12 18, 0 8 Z" fill="#1b4332" stroke="#40916c" strokeWidth="0.5" />
    </g>

    {/* Roasted Garlic Cloves (Caramelized Golden) */}
    <g transform="translate(150, 190)">
      <path d="M8 0 C16 4, 18 16, 12 22 C6 26, 0 20, 2 12 Z" fill="#f4e4ba" stroke="#b08938" strokeWidth="1" />
      <line x1="5" y1="6" x2="10" y2="16" stroke="#946d27" strokeWidth="1" />
    </g>
    <g transform="translate(245, 195) rotate(-30)">
      <path d="M8 0 C16 4, 18 16, 12 22 C6 26, 0 20, 2 12 Z" fill="#f4e4ba" stroke="#b08938" strokeWidth="1" />
    </g>

    {/* Mustard Seed Tempering Dots */}
    <circle cx="165" cy="180" r="1.5" fill="#1a110a" />
    <circle cx="172" cy="195" r="1.2" fill="#1a110a" />
    <circle cx="215" cy="205" r="1.5" fill="#1a110a" />
    <circle cx="235" cy="190" r="1.2" fill="#1a110a" />
  </svg>
);

// Awadhi Galouti Kebab on Saffron Sheermal Vector Art
export const GaloutiKebabVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    role="img"
    aria-label="Awadhi Galouti Kebab on Saffron Sheermal"
  >
    <defs>
      <linearGradient id="sheermalGold" x1="100" y1="120" x2="300" y2="240" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#faedcd" />
        <stop offset="50%" stopColor="#e9c46a" />
        <stop offset="100%" stopColor="#ca6702" />
      </linearGradient>
      <linearGradient id="galoutiBrown" x1="150" y1="100" x2="250" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#582f0e" />
        <stop offset="50%" stopColor="#3d1e08" />
        <stop offset="100%" stopColor="#251205" />
      </linearGradient>
      <linearGradient id="silverVark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="50%" stopColor="#e0e0e0" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#a0a0a0" stopOpacity="0.6" />
      </linearGradient>
    </defs>

    {/* Royal Brass Service Platter */}
    <ellipse cx="200" cy="205" rx="145" ry="46" fill="#16151c" stroke="#d4af37" strokeWidth="1.5" />
    <ellipse cx="200" cy="203" rx="138" ry="40" fill="#0d0d12" />
    {/* Platter Floral Filigree Rim Accent */}
    <path
      d="M75 203 Q200 245 325 203"
      stroke="#d4af37"
      strokeWidth="0.75"
      strokeDasharray="4 4"
      fill="none"
      opacity="0.6"
    />

    {/* Saffron Sheermal Disc (Golden royal flatbread base) */}
    <ellipse cx="200" cy="180" rx="90" ry="32" fill="url(#sheermalGold)" stroke="#d4a373" strokeWidth="1" />
    {/* Sheermal Prick Marks */}
    <g opacity="0.4" fill="#8c4e0b">
      <circle cx="160" cy="175" r="1.5" />
      <circle cx="175" cy="182" r="1.5" />
      <circle cx="225" cy="182" r="1.5" />
      <circle cx="240" cy="175" r="1.5" />
    </g>

    {/* Galouti Kebab Medallion 1 (Left) */}
    <ellipse cx="160" cy="165" rx="35" ry="20" fill="url(#galoutiBrown)" stroke="#6f3b14" strokeWidth="1" />
    {/* Charred Surface Texture */}
    <path d="M145 162 Q160 168 175 162" stroke="#1f0a02" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

    {/* Galouti Kebab Medallion 2 (Center Hero) */}
    <ellipse cx="205" cy="155" rx="42" ry="24" fill="url(#galoutiBrown)" stroke="#874719" strokeWidth="1.2" />
    <path d="M185 150 Q205 160 225 152" stroke="#1f0a02" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    <path d="M190 160 Q205 168 220 162" stroke="#1f0a02" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

    {/* Authentic 24K Edible Silver Vark (Foil Flakes) */}
    <path
      d="M200 144 L212 147 L208 155 L215 158 L202 159 L198 152 Z"
      fill="url(#silverVark)"
      className="animate-pulse"
      style={{ animationDuration: '4s' }}
    />
    <path d="M155 158 L162 160 L158 165 Z" fill="url(#silverVark)" opacity="0.7" />

    {/* Galouti Kebab Medallion 3 (Right) */}
    <ellipse cx="245" cy="168" rx="32" ry="18" fill="url(#galoutiBrown)" stroke="#6f3b14" strokeWidth="1" />

    {/* Shallot Ribbons / Laccha Pyaz */}
    <g stroke="#9b2226" strokeWidth="2" fill="none" opacity="0.85">
      <ellipse cx="140" cy="190" rx="14" ry="7" />
      <ellipse cx="260" cy="192" rx="16" ry="8" />
    </g>

    {/* Fresh Coriander & Royal Saffron Strands */}
    <path d="M195 138 C192 130, 202 130, 200 138" stroke="#52b788" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M210 140 C214 132, 220 135, 215 142" stroke="#52b788" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M175 148 Q182 142 188 145" stroke="#e63946" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Kerala Vegetable Stew Vector Art
export const VegetableStewVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    role="img"
    aria-label="Fragrant Kerala Coconut Milk Vegetable Stew"
  >
    <defs>
      <linearGradient id="clayBowl" x1="120" y1="120" x2="280" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4a2810" />
        <stop offset="50%" stopColor="#2e1608" />
        <stop offset="100%" stopColor="#1a0b04" />
      </linearGradient>
      <linearGradient id="coconutMilk" x1="140" y1="130" x2="260" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="60%" stopColor="#f7f4ea" />
        <stop offset="100%" stopColor="#e8dfc8" />
      </linearGradient>
    </defs>

    {/* Subtle Table Shadow */}
    <ellipse cx="200" cy="245" rx="100" ry="16" fill="#000000" opacity="0.6" />

    {/* Earthen Urli / Clay Pot Base */}
    <path
      d="M120 150 C120 225, 150 245, 200 245 C250 245, 280 225, 280 150 Z"
      fill="url(#clayBowl)"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    <ellipse cx="200" cy="150" rx="80" ry="24" fill="#251206" stroke="#b08938" strokeWidth="1" />

    {/* Rich First-Press Coconut Stew Surface */}
    <ellipse cx="200" cy="154" rx="72" ry="20" fill="url(#coconutMilk)" />

    {/* Golden Coconut Oil Swirls */}
    <path
      d="M155 152 Q180 162 205 152 Q230 144 245 155"
      stroke="#d4af37"
      strokeWidth="1.5"
      fill="none"
      opacity="0.8"
    />

    {/* Heirloom Baby Carrots */}
    <rect x="160" y="148" width="16" height="8" rx="3" transform="rotate(-15 160 148)" fill="#f77f00" />
    <rect x="220" y="152" width="14" height="7" rx="3" transform="rotate(20 220 152)" fill="#f77f00" />

    {/* Green French Beans */}
    <rect x="185" y="145" width="20" height="6" rx="2" transform="rotate(35 185 145)" fill="#588157" />
    <rect x="145" y="158" width="18" height="6" rx="2" transform="rotate(-25 145 158)" fill="#3a5a40" />

    {/* Potato / Yam Cubes */}
    <rect x="195" y="156" width="12" height="10" rx="2" fill="#e9d8a6" stroke="#cca43b" strokeWidth="0.5" />

    {/* Crushed Tellicherry Black Peppercorns */}
    <circle cx="175" cy="148" r="1.5" fill="#1b120c" />
    <circle cx="215" cy="146" r="1.5" fill="#1b120c" />
    <circle cx="205" cy="165" r="1.2" fill="#1b120c" />

    {/* Fresh Coastal Curry Leaf Branch */}
    <g transform="translate(180, 130)">
      <path d="M0 20 Q15 5 35 0" stroke="#2d6a4f" strokeWidth="1" fill="none" />
      <path d="M10 14 C15 10, 22 12, 20 16 C18 19, 12 18, 10 14 Z" fill="#40916c" />
      <path d="M22 8 C27 4, 34 6, 32 10 C30 13, 24 12, 22 8 Z" fill="#52b788" />
    </g>

    {/* Aromatic Steam Spirals */}
    <g opacity="0.5" stroke="#f6f3eb" strokeWidth="1" strokeLinecap="round">
      <path d="M185 125 Q180 105 190 90" className="animate-pulse" />
      <path d="M215 120 Q225 100 215 85" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
    </g>
  </svg>
);

// Gulab-e-AURA Saffron Dessert Vector Art
export const GulabAuraVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    role="img"
    aria-label="Gulab-e-AURA Artisanal Saffron Dessert"
  >
    <defs>
      <linearGradient id="dessertGlass" x1="120" y1="120" x2="280" y2="260" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2c141d" />
        <stop offset="50%" stopColor="#190a10" />
        <stop offset="100%" stopColor="#0c0508" />
      </linearGradient>
      <linearGradient id="gulabGlaze" x1="160" y1="110" x2="240" y2="190" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6f1d1b" />
        <stop offset="40%" stopColor="#431407" />
        <stop offset="100%" stopColor="#260701" />
      </linearGradient>
      <linearGradient id="saffronCream" x1="150" y1="140" x2="250" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff8e7" />
        <stop offset="50%" stopColor="#fbe3a1" />
        <stop offset="100%" stopColor="#f3c650" />
      </linearGradient>
    </defs>

    {/* Deep Burgundy Pedestal Coupe */}
    <ellipse cx="200" cy="250" rx="60" ry="12" fill="#14070c" stroke="#d4af37" strokeWidth="1" />
    <path d="M196 248 L196 200 L204 200 L204 248 Z" fill="#1f0b13" stroke="#d4af37" strokeWidth="0.8" />
    <path
      d="M110 150 C110 215, 150 215, 200 215 C250 215, 290 215, 290 150 Z"
      fill="url(#dessertGlass)"
      stroke="#d4af37"
      strokeWidth="1.2"
    />
    <ellipse cx="200" cy="150" rx="90" ry="26" fill="#1b0811" stroke="#b08938" strokeWidth="1" />

    {/* Chilled Saffron Cream Lake */}
    <ellipse cx="200" cy="156" rx="80" ry="20" fill="url(#saffronCream)" />

    {/* Rose Syrup Concentric Swirls */}
    <path
      d="M145 158 Q200 174 255 158 Q230 170 170 168 Z"
      fill="#9d0208"
      opacity="0.6"
    />

    {/* Artisanal Gulab Jamun Quenelle (Center Hero) */}
    <ellipse cx="200" cy="142" rx="36" ry="26" fill="url(#gulabGlaze)" stroke="#9c3b1e" strokeWidth="1" />
    {/* Caramelized Syrup Sheen Highlight */}
    <path
      d="M178 132 C185 125, 215 125, 222 134"
      stroke="#ffb703"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* 24K Edible Gold Leaf Foil Crown */}
    <g transform="translate(192, 126)">
      <path
        d="M0 8 L8 0 L18 6 L12 14 L2 12 Z"
        fill="#ffe600"
        stroke="#fff"
        strokeWidth="0.5"
        className="animate-pulse"
        style={{ animationDuration: '3s' }}
      />
      <circle cx="14" cy="4" r="1.5" fill="#fff" />
    </g>

    {/* Crushed Iranian Emerald Pistachio Dust */}
    <circle cx="165" cy="154" r="1.5" fill="#52b788" />
    <circle cx="172" cy="160" r="1.2" fill="#74c69d" />
    <circle cx="225" cy="152" r="1.5" fill="#52b788" />
    <circle cx="235" cy="158" r="1.2" fill="#74c69d" />
    <circle cx="205" cy="168" r="1.5" fill="#52b788" />

    {/* Organic Fragrant Rose Petals */}
    <path
      d="M150 146 C144 140, 140 148, 146 152 C152 154, 155 150, 150 146 Z"
      fill="#d90429"
      opacity="0.9"
    />
    <path
      d="M245 142 C252 138, 256 145, 250 148 C244 151, 241 146, 245 142 Z"
      fill="#ef233c"
      opacity="0.9"
    />

    {/* Delicate Saffron Threads */}
    <path d="M185 155 Q192 165 190 172" stroke="#d00000" strokeWidth="1" strokeLinecap="round" />
    <path d="M210 156 Q215 166 220 170" stroke="#e85d04" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Chef Executive Minimalist Vector Portraits (with individualized crests)
export const ChefPortraitVector: React.FC<{ chefId: string; className?: string }> = ({ chefId, className = 'w-full h-full' }) => {
  const getChefDetails = () => {
    switch (chefId) {
      case 'chef-1': // Amrutha Arun Kumar (Culinary Director)
        return {
          jacketColor: '#171720',
          accentColor: '#d4af37',
          collarStyle: 'director',
          crestIcon: 'crown',
          nameAbbr: 'AAK',
        };
      case 'chef-2': // Arun (North Indian)
        return {
          jacketColor: '#1c1514',
          accentColor: '#e07a5f',
          collarStyle: 'tandoor',
          crestIcon: 'flame',
          nameAbbr: 'ARUN',
        };
      case 'chef-3': // Manasa (South Indian)
        return {
          jacketColor: '#121a17',
          accentColor: '#52b788',
          collarStyle: 'coastal',
          crestIcon: 'wave',
          nameAbbr: 'MAN',
        };
      case 'chef-4': // Akshaya (Pastry)
        return {
          jacketColor: '#1b1418',
          accentColor: '#f4a261',
          collarStyle: 'pastry',
          crestIcon: 'whisk',
          nameAbbr: 'AKSH',
        };
      default:
        return {
          jacketColor: '#18181c',
          accentColor: '#d4af37',
          collarStyle: 'classic',
          crestIcon: 'star',
          nameAbbr: 'CHEF',
        };
    }
  };

  const details = getChefDetails();

  return (
    <svg
      viewBox="0 0 320 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-hidden ${className}`}
      role="img"
      aria-label="Executive Chef Portrait"
    >
      <defs>
        <linearGradient id={`bgGrad-${chefId}`} x1="0" y1="0" x2="320" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1a24" />
          <stop offset="50%" stopColor="#111117" />
          <stop offset="100%" stopColor="#0a0a0d" />
        </linearGradient>
        <linearGradient id={`goldBorder-${chefId}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5eed3" />
          <stop offset="50%" stopColor={details.accentColor} />
          <stop offset="100%" stopColor="#876020" />
        </linearGradient>
      </defs>

      {/* Frame Background */}
      <rect width="320" height="380" fill={`url(#bgGrad-${chefId})`} />

      {/* Subtle Indian Geometric Architectural Arch */}
      <path
        d="M40 380 L40 140 C40 70, 160 30, 160 30 C160 30, 280 70, 280 140 L280 380"
        stroke={`url(#goldBorder-${chefId})`}
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
      <circle cx="160" cy="30" r="4" fill={details.accentColor} opacity="0.6" />

      {/* Ambient Backlight Halo */}
      <ellipse cx="160" cy="180" rx="90" ry="100" fill={details.accentColor} opacity="0.08" />

      {/* Chef Torso Silhouette & Double Breasted Jacket */}
      <path
        d="M60 380 L80 270 C85 240, 120 225, 160 225 C200 225, 235 240, 240 270 L260 380 Z"
        fill={details.jacketColor}
        stroke={`url(#goldBorder-${chefId})`}
        strokeWidth="1.2"
      />

      {/* Jacket Lapel & Mandarin Collar */}
      <path d="M125 228 L160 255 L195 228" stroke={`url(#goldBorder-${chefId})`} strokeWidth="1.5" fill="none" />
      <path d="M135 210 L160 225 L185 210" stroke={`url(#goldBorder-${chefId})`} strokeWidth="1.5" fill="none" />

      {/* Executive Brass Buttons (Two Rows) */}
      <g fill={details.accentColor}>
        <circle cx="145" cy="275" r="3" />
        <circle cx="145" cy="305" r="3" />
        <circle cx="145" cy="335" r="3" />
        <circle cx="175" cy="275" r="3" />
        <circle cx="175" cy="305" r="3" />
        <circle cx="175" cy="335" r="3" />
      </g>

      {/* Executive Chef Medal / Crest on Breast Pocket */}
      <g transform="translate(195, 280)">
        <rect x="0" y="0" width="30" height="20" rx="2" fill="#0d0d12" stroke={details.accentColor} strokeWidth="1" />
        <path d="M5 10 L25 10" stroke={details.accentColor} strokeWidth="0.75" />
      </g>

      {/* Head & Neck Minimalist Form */}
      <rect x="145" y="195" width="30" height="30" rx="6" fill="#e8cbb0" opacity="0.9" />
      <ellipse cx="160" cy="165" rx="38" ry="44" fill="#e2c1a4" />

      {/* Executive Tall Toque / Chef Crown */}
      <g transform="translate(118, 55)">
        {/* Pleated Hat Silhouette */}
        <path
          d="M12 90 C8 60, 20 40, 42 35 C55 32, 65 35, 75 42 C85 55, 80 85, 72 90 Z"
          fill="#faf7f0"
          stroke={`url(#goldBorder-${chefId})`}
          strokeWidth="1.2"
        />
        {/* Crown Pleats */}
        <path d="M28 85 L28 45" stroke="#ded8c8" strokeWidth="1" />
        <path d="M42 85 L42 38" stroke="#ded8c8" strokeWidth="1" />
        <path d="M56 85 L56 42" stroke="#ded8c8" strokeWidth="1" />
        {/* Gold Trim Headband */}
        <rect x="10" y="85" width="64" height="15" rx="3" fill="#0d0d12" stroke={details.accentColor} strokeWidth="1.2" />
        <circle cx="42" cy="92" r="3" fill={details.accentColor} />
      </g>

      {/* Hair styling silhouettes per chef */}
      {chefId === 'chef-1' && (
        <path d="M122 155 C120 190, 130 205, 135 210" stroke="#2b1a13" strokeWidth="12" strokeLinecap="round" />
      )}
      {chefId === 'chef-3' && (
        <circle cx="120" cy="180" r="10" fill="#201510" stroke="#f6f3eb" strokeWidth="1.5" />
      )}

      {/* Gold Seal / Signature Stamp at Base */}
      <g transform="translate(20, 20)">
        <circle cx="20" cy="20" r="16" fill="#14141c" stroke={details.accentColor} strokeWidth="1" />
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fontSize="9"
          fontWeight="bold"
          fill={details.accentColor}
          fontFamily="serif"
          letterSpacing="1"
        >
          {details.nameAbbr}
        </text>
      </g>
    </svg>
  );
};

// Visakhapatnam Beach Road Coastal Architectural Map Vector
export const VisakhapatnamMapVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-hidden ${className}`}
    role="img"
    aria-label="Stylized Map of Beach Road, Visakhapatnam"
  >
    <defs>
      <linearGradient id="oceanGrad" x1="400" y1="0" x2="600" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#081826" />
        <stop offset="60%" stopColor="#0b2238" />
        <stop offset="100%" stopColor="#06121d" />
      </linearGradient>
      <linearGradient id="landGrad" x1="0" y1="0" x2="350" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#141419" />
        <stop offset="100%" stopColor="#0d0d12" />
      </linearGradient>
    </defs>

    {/* Land Surface */}
    <rect width="600" height="400" fill="url(#landGrad)" />

    {/* Bay of Bengal Ocean Surface */}
    <path
      d="M340 0 C330 80, 360 160, 350 230 C340 300, 380 350, 420 400 L600 400 L600 0 Z"
      fill="url(#oceanGrad)"
    />

    {/* Gentle Coastal Waves / Surf Linework */}
    <path
      d="M340 0 C330 80, 360 160, 350 230 C340 300, 380 350, 420 400"
      stroke="#d4af37"
      strokeWidth="2"
      opacity="0.7"
    />
    <path
      d="M355 0 C345 80, 375 160, 365 230 C355 300, 395 350, 435 400"
      stroke="#38a3a5"
      strokeWidth="1"
      strokeDasharray="8 4"
      opacity="0.4"
    />
    <path
      d="M375 0 C365 80, 395 160, 385 230 C375 300, 415 350, 455 400"
      stroke="#57cc99"
      strokeWidth="0.75"
      opacity="0.2"
    />

    {/* Dolphin's Nose Silhouette (Southern Bay) */}
    <path
      d="M380 360 C420 330, 480 340, 520 390 L420 400 Z"
      fill="#171922"
      stroke="#d4af37"
      strokeWidth="0.8"
      opacity="0.7"
    />
    <text x="470" y="380" fill="#9e9aa8" fontSize="10" letterSpacing="1">Dolphin's Nose</text>

    {/* Urban Street Grid (Visakhapatnam City Lines) */}
    <g stroke="#262633" strokeWidth="1" opacity="0.6">
      {/* Major Avenues */}
      <line x1="40" y1="60" x2="330" y2="70" />
      <line x1="30" y1="130" x2="340" y2="140" />
      <line x1="50" y1="210" x2="345" y2="215" />
      <line x1="60" y1="290" x2="360" y2="300" />
      {/* Cross Streets */}
      <line x1="80" y1="20" x2="100" y2="380" />
      <line x1="160" y1="20" x2="180" y2="380" />
      <line x1="240" y1="20" x2="260" y2="380" />
    </g>

    {/* Iconic Beach Road Arterial Highway */}
    <path
      d="M320 0 C310 80, 340 160, 330 230 C320 300, 360 350, 400 400"
      stroke="#f5eed3"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M320 0 C310 80, 340 160, 330 230 C320 300, 360 350, 400 400"
      stroke="#d4af37"
      strokeWidth="1"
      strokeDasharray="4 4"
    />

    {/* Coastal Landmarks */}
    {/* Rama Krishna Beach Promenade */}
    <g transform="translate(300, 100)">
      <circle cx="0" cy="0" r="3" fill="#a09da8" />
      <text x="-120" y="4" fill="#a09da8" fontSize="10">RK Beach Promenade</text>
    </g>

    {/* INS Kursura Submarine Museum Landmark */}
    <g transform="translate(325, 290)">
      <rect x="-14" y="-4" width="28" height="8" rx="4" fill="#3f4254" stroke="#a09da8" strokeWidth="0.5" />
      <text x="-145" y="4" fill="#a09da8" fontSize="10">Submarine Museum</text>
    </g>

    {/* AURA Restaurant Primary Location Pin */}
    <g transform="translate(332, 195)">
      {/* Radar pulse rings */}
      <circle cx="0" cy="0" r="28" fill="#d4af37" opacity="0.1" className="animate-ping" style={{ animationDuration: '3s' }} />
      <circle cx="0" cy="0" r="16" fill="#d4af37" opacity="0.2" />

      {/* Pin Body */}
      <path
        d="M0 -22 C-8 -22, -14 -16, -14 -8 C-14 3, 0 16, 0 16 C0 16, 14 3, 14 -8 C14 -16, 8 -22, 0 -22 Z"
        fill="#d4af37"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      <circle cx="0" cy="-9" r="4.5" fill="#0d0d12" />

      {/* Callout Card */}
      <g transform="translate(-160, -50)">
        <rect x="0" y="0" width="135" height="42" rx="4" fill="#0f0f15" stroke="#d4af37" strokeWidth="1" />
        <text x="10" y="18" fill="#d4af37" fontSize="11" fontWeight="bold" letterSpacing="1">AURA</text>
        <text x="10" y="32" fill="#ded8c8" fontSize="9">Beach Road, Vizag</text>
      </g>
    </g>

    {/* Ocean Label */}
    <text x="480" y="160" fill="#2d6a8f" fontSize="14" letterSpacing="4" fontFamily="serif" opacity="0.7">
      BAY OF BENGAL
    </text>
    <text x="495" y="180" fill="#2d6a8f" fontSize="9" letterSpacing="2" opacity="0.5">
      VISAKHAPATNAM HARBOR
    </text>

    {/* Compass Rose */}
    <g transform="translate(540, 50)" opacity="0.6">
      <circle cx="0" cy="0" r="18" stroke="#d4af37" strokeWidth="0.8" fill="none" />
      <polygon points="0,-14 3,0 0,3 -3,0" fill="#d4af37" />
      <polygon points="0,14 3,0 0,-3 -3,0" fill="#585664" />
      <text x="-4" y="-18" fill="#d4af37" fontSize="9" fontWeight="bold">N</text>
    </g>
  </svg>
);

// Generic Gallery Scene Vector
export const GalleryVectorIllustration: React.FC<{ vectorId: string; className?: string }> = ({ vectorId, className = 'w-full h-full' }) => {
  switch (vectorId) {
    case 'gallery_biryani':
      return <RoyalBiryaniVector className={className} />;
    case 'gallery_galouti_plating':
      return <GaloutiKebabVector className={className} />;
    case 'gallery_dessert_art':
      return <GulabAuraVector className={className} />;
    case 'gallery_chef_tandoor':
      return <PaneerTikkaVector className={className} />;
    case 'gallery_chefs_table':
      return (
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Chef's Table">
          <rect width="400" height="300" fill="#0d0d12" />
          <radialGradient id="ctGlow" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0d0d12" stopOpacity="0" />
          </radialGradient>
          <ellipse cx="200" cy="180" rx="160" ry="80" fill="url(#ctGlow)" />
          {/* Chef's Table Counter */}
          <ellipse cx="200" cy="220" rx="150" ry="40" fill="#181822" stroke="#d4af37" strokeWidth="1.2" />
          {/* Cloche Lid */}
          <path d="M160 210 C160 160, 240 160, 240 210 Z" fill="#2d2214" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="200" cy="155" r="6" fill="#d4af37" />
          {/* Glassware */}
          <path d="M260 200 L270 200 L266 175 C275 160, 285 180, 275 190" stroke="#f6f3eb" strokeWidth="1" opacity="0.6" />
          <line x1="270" y1="200" x2="270" y2="215" stroke="#f6f3eb" strokeWidth="1" opacity="0.6" />
          <line x1="262" y1="215" x2="278" y2="215" stroke="#f6f3eb" strokeWidth="1" opacity="0.6" />
          <text x="200" y="270" textAnchor="middle" fill="#d4af37" fontSize="12" letterSpacing="3" fontFamily="serif">THE CHEF'S TABLE</text>
        </svg>
      );
    case 'gallery_interior_arch':
    case 'gallery_private_baithak':
      return (
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Luxury Restaurant Interior">
          <rect width="400" height="300" fill="#0b0b0e" />
          {/* Triple Jali Archway */}
          <path d="M40 300 L40 130 C40 80, 110 50, 110 50 C110 50, 180 80, 180 130 L180 300" stroke="#d4af37" strokeWidth="1" opacity="0.4" fill="#14141c" />
          <path d="M220 300 L220 130 C220 80, 290 50, 290 50 C290 50, 360 80, 360 130 L360 300" stroke="#d4af37" strokeWidth="1" opacity="0.4" fill="#14141c" />
          {/* Hanging Brass Pendants */}
          <line x1="110" y1="0" x2="110" y2="110" stroke="#d4af37" strokeWidth="1" />
          <polygon points="110,110 102,125 118,125" fill="#d4af37" />
          <circle cx="110" cy="130" r="16" fill="#ffe39f" opacity="0.15" />

          <line x1="290" y1="0" x2="290" y2="110" stroke="#d4af37" strokeWidth="1" />
          <polygon points="290,110 282,125 298,125" fill="#d4af37" />
          <circle cx="290" cy="130" r="16" fill="#ffe39f" opacity="0.15" />

          {/* Central Banquet Table with Linen & Candle */}
          <ellipse cx="200" cy="240" rx="90" ry="24" fill="#1c1c26" stroke="#d4af37" strokeWidth="1" />
          <circle cx="200" cy="235" r="3" fill="#ffb703" className="animate-pulse" />
          <text x="200" y="280" textAnchor="middle" fill="#ebdca7" fontSize="11" letterSpacing="2" fontFamily="serif">THE ROYAL SALON</text>
        </svg>
      );
    case 'gallery_terrace_dining':
      return (
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Oceanfront Terrace">
          <rect width="400" height="300" fill="#080e18" />
          {/* Ocean Horizon & Moon Glow */}
          <path d="M0 160 L400 160 L400 300 L0 300 Z" fill="#040912" />
          <line x1="0" y1="160" x2="400" y2="160" stroke="#d4af37" strokeWidth="0.75" opacity="0.5" />
          <ellipse cx="200" cy="160" rx="140" ry="12" fill="#d4af37" opacity="0.1" />
          <circle cx="320" cy="80" r="24" fill="#fbf8ee" opacity="0.85" />
          {/* Terrace Railing */}
          <line x1="0" y1="210" x2="400" y2="210" stroke="#d4af37" strokeWidth="1.5" />
          <g stroke="#d4af37" strokeWidth="0.8" opacity="0.6">
            <line x1="60" y1="210" x2="60" y2="300" />
            <line x1="140" y1="210" x2="140" y2="300" />
            <line x1="220" y1="210" x2="220" y2="300" />
            <line x1="300" y1="210" x2="300" y2="300" />
            <line x1="380" y1="210" x2="380" y2="300" />
          </g>
          <text x="200" y="275" textAnchor="middle" fill="#d4af37" fontSize="11" letterSpacing="3" fontFamily="serif">BAY OF BENGAL TERRACE</text>
        </svg>
      );
    default:
      return <RoyalBiryaniVector className={className} />;
  }
};

// Feature Pillars Icons (Curated Cuisine, Warm Hospitality, Seasonal Ingredients, Elegant Ambience)
export const ExperienceIcon: React.FC<{ iconType: string; size?: number; className?: string }> = ({
  iconType,
  size = 36,
  className = '',
}) => {
  switch (iconType) {
    case 'curated_cuisine':
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className} role="img" aria-label="Curated Cuisine">
          <circle cx="18" cy="18" r="16" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="18" cy="18" r="12" fill="#1b1712" stroke="#d4af37" strokeWidth="1" />
          <path d="M12 18 C12 14, 24 14, 24 18" stroke="#f6f3eb" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="18" cy="13" r="1.5" fill="#d4af37" />
          <line x1="10" y1="22" x2="26" y2="22" stroke="#d4af37" strokeWidth="1.2" />
        </svg>
      );
    case 'warm_hospitality':
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className} role="img" aria-label="Warm Hospitality (Namaste Diya)">
          <circle cx="18" cy="18" r="16" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
          {/* Sacred Diya lamp / Namaste palms */}
          <path d="M11 22 C11 25, 25 25, 25 22 Z" fill="#291912" stroke="#d4af37" strokeWidth="1.2" />
          <path d="M18 10 C16 14, 16 18, 18 19 C20 18, 20 14, 18 10 Z" fill="#ffb703" className="animate-pulse" />
          <circle cx="18" cy="8" r="1.5" fill="#ffe39f" />
        </svg>
      );
    case 'seasonal_ingredients':
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className} role="img" aria-label="Seasonal Ingredients">
          <circle cx="18" cy="18" r="16" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
          {/* Cardamom pod & botanical branch */}
          <path d="M14 24 C10 16, 18 10, 22 12 C26 14, 26 22, 14 24 Z" stroke="#52b788" strokeWidth="1.2" fill="#14241b" />
          <line x1="14" y1="24" x2="21" y2="13" stroke="#74c69d" strokeWidth="0.8" />
          <circle cx="21" cy="20" r="1.5" fill="#d4af37" />
        </svg>
      );
    case 'elegant_ambience':
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className} role="img" aria-label="Elegant Ambience">
          <circle cx="18" cy="18" r="16" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
          {/* Hanging lantern with radiating glow */}
          <line x1="18" y1="4" x2="18" y2="14" stroke="#d4af37" strokeWidth="1" />
          <polygon points="18,14 13,20 23,20" stroke="#d4af37" strokeWidth="1" fill="#1c1611" />
          <polygon points="13,20 18,26 23,20" stroke="#d4af37" strokeWidth="1" fill="#1c1611" />
          <circle cx="18" cy="20" r="2" fill="#ffd166" className="animate-pulse" />
        </svg>
      );
    default:
      return null;
  }
};

// Hero Cinematic Backdrop Vector
export const HeroCinematicBackdrop: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
    {/* Deep Atmospheric Gradients */}
    <div className="absolute inset-0 bg-radial from-[#1e1724]/40 via-[#0c0c0f]/80 to-[#07070a]" />

    {/* Golden Ray Cones */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-[#d4af37]/10 via-[#9d0208]/5 to-transparent blur-3xl opacity-60" />

    {/* Architectural Mughal Jali Vector Screen Pattern */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="jaliPattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M30 0 L60 30 L30 60 L0 30 Z"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.8"
          />
          <circle cx="30" cy="30" r="10" stroke="#d4af37" strokeWidth="0.6" fill="none" />
          <path d="M30 20 L30 40 M20 30 L40 30" stroke="#d4af37" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jaliPattern)" />
    </svg>

    {/* Grand Central Palace Archway Silhouettes */}
    <svg
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-auto opacity-35"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Outer Arch */}
      <path
        d="M220 800 L220 400 C220 180, 520 80, 720 80 C920 80, 1220 180, 1220 400 L1220 800"
        stroke="#d4af37"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Inner Intricate Arch */}
      <path
        d="M320 800 L320 440 C320 250, 560 160, 720 160 C880 160, 1120 250, 1120 440 L1120 800"
        stroke="#d4af37"
        strokeWidth="0.8"
        strokeDasharray="6 4"
        fill="none"
      />
      {/* Architectural Keystone Finial */}
      <circle cx="720" cy="80" r="8" fill="#d4af37" />
      <path d="M720 80 L720 50" stroke="#d4af37" strokeWidth="2" />
      <circle cx="720" cy="46" r="4" fill="#ffffff" />
    </svg>

    {/* Subtle Vignette Gradient to anchor the section */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-transparent to-[#0c0c0f]/80" />
  </div>
);

// Heritage Spice Box Vector (for Our Story section)
export const HeritageSpiceDabbaVector: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg
    viewBox="0 0 460 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    role="img"
    aria-label="Handcrafted Brass Masala Dabba with Royal Spices"
  >
    <defs>
      <linearGradient id="brassContainer" x1="100" y1="80" x2="360" y2="340" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f5eed3" />
        <stop offset="40%" stopColor="#d4af37" />
        <stop offset="85%" stopColor="#875817" />
        <stop offset="100%" stopColor="#4a300a" />
      </linearGradient>
      <radialGradient id="turmericGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fcbf49" />
        <stop offset="100%" stopColor="#d62828" />
      </radialGradient>
    </defs>

    {/* Ambient Glow */}
    <ellipse cx="230" cy="240" rx="180" ry="90" fill="#d4af37" opacity="0.12" />

    {/* Cast Brass Outer Rim */}
    <ellipse cx="230" cy="220" rx="160" ry="85" fill="url(#brassContainer)" stroke="#fff0c2" strokeWidth="2" />
    <ellipse cx="230" cy="216" rx="150" ry="78" fill="#181309" stroke="#875817" strokeWidth="1.5" />

    {/* Center Katori (Kashmiri Saffron & Green Cardamom) */}
    <ellipse cx="230" cy="216" rx="36" ry="24" fill="#2d1e08" stroke="#d4af37" strokeWidth="1.2" />
    {/* Saffron Strands */}
    <g stroke="#e63946" strokeWidth="1.5" strokeLinecap="round">
      <path d="M220 210 Q225 204 235 212" />
      <path d="M228 214 Q236 218 242 210" />
      <path d="M224 220 Q230 224 238 218" />
    </g>

    {/* Compartment 1 (Top Left): Star Anise */}
    <ellipse cx="160" cy="180" rx="32" ry="20" fill="#221508" stroke="#d4af37" strokeWidth="1" />
    <g transform="translate(160, 180) scale(0.7)">
      <polygon points="0,-15 4,-5 14,-5 6,2 9,12 0,6 -9,12 -6,2 -14,-5 -4,-5" fill="#8b4513" stroke="#4a2508" />
    </g>

    {/* Compartment 2 (Top Right): Ceylon Cinnamon Quills */}
    <ellipse cx="300" cy="180" rx="32" ry="20" fill="#221508" stroke="#d4af37" strokeWidth="1" />
    <g stroke="#9c6644" strokeWidth="3" strokeLinecap="round">
      <line x1="285" y1="175" x2="315" y2="185" />
      <line x1="288" y1="182" x2="312" y2="175" />
    </g>

    {/* Compartment 3 (Bottom Left): Golden Turmeric Roots */}
    <ellipse cx="150" cy="245" rx="34" ry="22" fill="#221508" stroke="#d4af37" strokeWidth="1" />
    <ellipse cx="150" cy="245" rx="24" ry="14" fill="url(#turmericGlow)" opacity="0.85" />

    {/* Compartment 4 (Bottom Right): Malabar Black Peppercorns */}
    <ellipse cx="310" cy="245" rx="34" ry="22" fill="#221508" stroke="#d4af37" strokeWidth="1" />
    <g fill="#1a110a" stroke="#000" strokeWidth="0.5">
      <circle cx="300" cy="242" r="3" />
      <circle cx="310" cy="240" r="3.2" />
      <circle cx="320" cy="245" r="2.8" />
      <circle cx="305" cy="250" r="3.5" />
      <circle cx="315" cy="252" r="3" />
    </g>

    {/* Compartment 5 (Bottom Center): Whole Cloves */}
    <ellipse cx="230" cy="265" rx="32" ry="18" fill="#221508" stroke="#d4af37" strokeWidth="1" />
    <g stroke="#4f2710" strokeWidth="2.5" strokeLinecap="round">
      <line x1="220" y1="265" x2="228" y2="265" />
      <circle cx="229" cy="265" r="2" fill="#803d16" />
      <line x1="233" y1="263" x2="241" y2="263" />
      <circle cx="242" cy="263" r="2" fill="#803d16" />
    </g>

    {/* Traditional Carved Brass Measuring Spoon */}
    <g transform="translate(240, 130) rotate(35)">
      <rect x="0" y="0" width="8" height="90" rx="3" fill="url(#brassContainer)" stroke="#fff" strokeWidth="0.5" />
      <circle cx="4" cy="95" r="14" fill="url(#brassContainer)" stroke="#fff" strokeWidth="0.5" />
      <circle cx="4" cy="95" r="10" fill="#9c782f" />
    </g>

    {/* Subtle Steam Rising */}
    <g opacity="0.4" stroke="#f6f3eb" strokeWidth="1" strokeLinecap="round">
      <path d="M210 160 C205 130, 220 110, 215 80" className="animate-pulse" />
      <path d="M245 155 C250 125, 235 105, 245 75" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    </g>
  </svg>
);
