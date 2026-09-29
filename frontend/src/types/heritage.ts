export interface Chip { label: string; className: string }

export interface Tour {
  id: number;
  slug: string;
  badge: string;
  badgeClass: string;
  duration: string;
  location: string;
  price: string;
  adultPrice?: number;
  childPrice?: number;
  title: string;
  description: string;
  image: string;
  category?: 'all' | 'craft' | 'architecture' | 'ritual';
  rating?: string;
  reviewsCount?: string;
  chips: Chip[];
}

export interface Waypoint {
  id: number;
  icon: string;
  shortName: string;
  district: string;
  title: string;
  sub: string;
  rules: string;
  coords?: [number, number];
  badge?: string;
  badgeClass?: string;
  openHours?: string;
  distance?: string;
}

export interface Artisan {
  id: number;
  name: string;
  title: string;
  experience: string;
  village: string;
  quote: string;
  bio: string;
  schedule: string;
  image: string;
  badgeClass: string;
}

export interface Testimonial {
  id: number;
  initials: string;
  name: string;
  origin: string;
  avatarClass: string;
  content: string;
}

export interface NavItem { path: string; icon: string; label: string }

export interface TripFormValues {
  destination: string;
  date: string;
  travelers: string;
}
