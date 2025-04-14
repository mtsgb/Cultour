import axios from 'axios';

export const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org'
});

export const countriesApi = axios.create ({
    baseURL: 'https://restcountries.com/v3.1'
});

export const googlePlacesApi = axios.create ({
    baseURL: 'https://maps.googleapis.com/maps/api/place'
});