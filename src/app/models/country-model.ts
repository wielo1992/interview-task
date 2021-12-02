export interface Country {
  name: {
    official: string;
    common: string;
  };

  capital: string;
  region: string;
  subregion: string;
  flags: { png: string; svg: string };
  population: string;
  status: string;
  independent: boolean;
  borders: [''];
  altSpellings;
  currencies;
  currenciesShortcut;
}

export enum Regions {
  AFRICA = 'Africa',
  AMERICAS = 'Americas',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania',
}
