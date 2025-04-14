export type GooglePlacesResponse = {
  predictions: GooglePlacePrediction[];
  status: string;
};

export type GooglePlacePrediction = {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
};

export type PlaceDetailsResponse = {
  result: {
    name: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    formatted_address: string;
  };
  status: string;
};


export type NearbyPlacesResponse = {
  results: NearbyPlaces[];
  status: string;
};


export type NearbyPlaces = {
  name: string;
  place_id: string;
  rating?: number;
  user_ratings_total?: number;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  photos?: {
    photo_reference: string;
  }[];
  vicinity?: string;
};