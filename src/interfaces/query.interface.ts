export interface IQuery {
  q?: string;
  lon?: string;
  lat?: string;

  [key: string]: string | number;
}
