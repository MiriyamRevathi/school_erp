export type Status = 'Active' | 'Inactive' | 'Pending' | 'Archived';

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export type Gender = 'Male' | 'Female' | 'Other';
