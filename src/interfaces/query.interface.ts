export interface IQuery {
  city: string;
  lat: number;
  lon: number;

  [key: string]: string | number;
}
