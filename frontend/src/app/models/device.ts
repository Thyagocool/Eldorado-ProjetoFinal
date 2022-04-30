export interface Device {
  id: string;
  name: string;
  category_id: string;
  color: string;
  partnumber: string;
  category: {
    id: string;
    name: string;
  }
}
