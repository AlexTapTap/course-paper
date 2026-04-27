export enum ServiceType {
  COTTAGE = "Коттеджи",
  COMMERCIAL = "Коммерция",
  RECONSTRUCTION = "Реконструкция",
}

export interface Review {
  id?: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: any;
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  createdAt: any;
  status: 'new' | 'processing' | 'contacted' | 'closed';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
}
