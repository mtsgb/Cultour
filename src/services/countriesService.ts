import { countriesApi } from "@/lib/axiosInstances";
import { axiosApi } from "./axiosApi";
import { CountryInfo } from "@/types/countries";

export async function getCountrybyName(name: string): Promise<CountryInfo[]> {
    return axiosApi<CountryInfo[]> (countriesApi, `/name/${name}`,{
        params: {
            fields: 'name,capital,currencies,languages,flags,population'
        }
    });
}