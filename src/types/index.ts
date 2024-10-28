export interface Ticket {
  id: string;
  title: string;
  status: 'Created' | 'In Progress' | 'Resolved' | 'Withdrawn' | 'Acknowledged';
  assignee: string;
  created: string;
  resolved?: string;
  region: 'APAC' | 'AMER' | 'EMEA';
}

export interface KPIData {
  created: number;
  resolved: number;
}

export interface AssigneeStats {
  name: string;
  resolved: number;
}

export interface StatusData {
  status: string;
  count: number;
}

export interface RegionData {
  region: string;
  tickets: number;
}