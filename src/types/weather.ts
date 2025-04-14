export type WeatherCurrent = {
    name: string;
    
    main: {
        temp: number,
        feels_like: number,
        humidity: number
    };
    
    weather: {
        description: string,
        icon: string
    }[];
    
    wind: {
        speed: number;
    };
};
  
  export type WeatherForecast = {
    list: ForecastItem[];
    city: {
      name: string;
      country: string;
    };
  };
  
  export type ForecastItem = {
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  };
  

