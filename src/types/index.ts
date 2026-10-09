export type TattooCategory =
  | 'all'
  | 'blackwork'
  | 'fineline'
  | 'realism'
  | 'geometric'
  | 'ornamental'
  | 'gothic';

export interface TattooWork {
  id: string;
  title: string;
  category: TattooCategory;
  categoryLabel: string;
  image: string;
  placement: string;
  description: string;
  aspect: 'portrait' | 'tall' | 'square';
  instagramPostUrl?: string;
  isVideo?: boolean;
  isAward?: boolean;
  lqip?: string;
}

export interface BookingData {
  // Step 1: Idea
  style: string;
  placement: string;
  size: string;
  colorType: 'black-gray' | 'color';
  description: string;
  
  // Step 2: References
  referenceFiles: { name: string; size: number; previewUrl?: string }[];
  
  // Step 3: Details
  fullName: string;
  email: string;
  phone: string;
  contactMethod: 'instagram' | 'email' | 'phone' | 'whatsapp';
  instagramHandle?: string;
  
  // Step 4: Dates
  preferredDate: string;
  alternativeDate: string;
  preferredTime: 'morning' | 'afternoon' | 'full-day';
  notes: string;
}

export interface BookingSubmissionResult {
  referenceId: string;
  submittedAt: string;
  data: BookingData;
}
