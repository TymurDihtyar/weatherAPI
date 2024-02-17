export interface IQuery {
  city?: string;
  lat?: string;
  lon?: string;

  [key: string]: string | number;
}
