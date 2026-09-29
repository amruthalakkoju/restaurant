export type DishCategory = 
  | 'All'
  | 'Starters'
  | 'Vegetarian'
  | 'Non-Vegetarian'
  | 'Main Course'
  | 'Biryani'
  | 'Breads'
  | 'Desserts'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: DishCategory;
  price: number;
  description: string;
  isVeg: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Royal Spice';
  isSignature?: boolean;
  region?: string;
  vectorType: string;
}

export interface Chef {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  experience: string;
  crestId: string;
  signatureDish: string;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  text: string;
  date: string;
  favoriteDish: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Interiors' | 'Chefs' | 'Dining';
  description: string;
  vectorId: string;
  tag: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Main Dining Room' | 'Oceanfront Terrace' | "Chef's Table" | 'Private Dining Suite';
  specialRequests: string;
  specialExperience?: string;
}

export interface ConfirmedReservation extends ReservationFormData {
  confirmationCode: string;
  submittedAt: string;
}
