export interface Country {
  name: {
    official: string;
  };
  currencies: { name: string; symbol: string };
  capital: string;
  region: string;
  subregion: string;
  flags: { png: string; svg: string };
}

export enum Regions {
  AFRICA = 'Africa',
  AMERICAS = 'Americas',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania',
}
