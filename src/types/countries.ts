export type CountryInfo = {
    name: {
      common: string;
    };
    capital: string[];
    currencies: {
      [code: string]: {
        name: string;
        symbol: string;
      };
    };
    languages: {
      [code: string]: string;
    };
    flags: {
      svg: string;
      alt?: string;
    };
    population: number;
  };