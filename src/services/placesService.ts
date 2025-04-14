import { axiosApi } from "./axiosApi";
import { googlePlacesApi } from "@/lib/axiosInstances";
import { GooglePlacesResponse, PlaceDetailsResponse, NearbyPlacesResponse } from "@/types/places";

const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY

export async function getPlacesAutoComplete(input: string): Promise<GooglePlacesResponse> {
    return axiosApi<GooglePlacesResponse>(googlePlacesApi, '/autocomplete/json', {
        params: {
            input,
            key: API_KEY,
            language: 'pt_BR',
            types: '(cities)'
        }
    });
};

export async function getPlaceDetails(placeId: string): Promise<PlaceDetailsResponse> {
    return axiosApi<PlaceDetailsResponse>(googlePlacesApi, '/details/json', {
        params: {
            place_id: placeId,
            key: API_KEY,
            language: 'pt_BR',
            fields: 'name,geometry,formatted_address',
        }
    })
};

export async function getNearbyPlaces(
    lat: number,
    lng: number,
    type: string = 'tourist_attraction',
    radius: number = 3000
): Promise<NearbyPlacesResponse> {
    return axiosApi<NearbyPlacesResponse>(googlePlacesApi, '/nearbysearch/json', {
        params: {
            location: `${lat},${lng}`,
            radius,
            type,
            key: API_KEY,
            language: 'pt_BR',
        },
    });
}