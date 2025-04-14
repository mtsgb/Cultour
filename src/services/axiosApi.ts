import { AxiosInstance, AxiosRequestConfig  } from 'axios'; 

export async function axiosApi<T> (
    instance: AxiosInstance,
    endpoint: string,
    options?: AxiosRequestConfig
): Promise<T> {
    const response = await instance(endpoint, options)
    return response.data;
}