import { axiosApi } from './axiosApi';
import { weatherApi } from '@/lib/axiosInstances';
import { WeatherCurrent, WeatherForecast } from '@/types/weather'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export async function getWeatherCurrent(city: string): Promise<WeatherCurrent> {
    return axiosApi<WeatherCurrent>(weatherApi, '/data/2.5/weather', {
        params: {
            q: city,
            units: 'metric',
            lang: 'pt_br',
            appid: API_KEY
        },
    });
}

export async function getWeatherForecast(city: string): Promise<WeatherForecast> {
    return axiosApi<WeatherForecast>(weatherApi, '/data/2.5/forecast', {
        params: {
            q: city,
            units: 'metric',
            lang: 'pt_br',
            appid: API_KEY
        },
    });
}