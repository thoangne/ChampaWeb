export interface Chip { label: string; className: string }

export interface Tour {
  id: number;
  badge: string;
  badgeClass: string;
  duration: string;
  location: string;
  price: string;
  title: string;
  description: string;
  image: string;
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
