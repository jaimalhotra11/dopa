export interface ClassItem {
  time: string;
  name: string;
  trainer: string;
  spots: number;
}

export interface ClassScheduleType {
  [key: string]: ClassItem[];
}