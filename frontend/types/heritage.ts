export interface HeritageStation {
  id: number;
  name: string;
  sub: string;
  title: string;
  distance: string;
  rules: string;
  icon: string;
}

export interface CuratedTour {
  id: number;
  title: string;
  location: string;
  price: string;
  duration: string;
  tag: string;
  tagColor: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}