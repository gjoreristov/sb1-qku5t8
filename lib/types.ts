export interface Computer {
  id: number;
  name: string;
  ipAddress: string;
  macAddress: string;
  description: string;
  room: string;
  status: 'active' | 'inactive';
}