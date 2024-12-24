export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: any; // Replace with proper icon type
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  icon: any; // Replace with proper icon type
}