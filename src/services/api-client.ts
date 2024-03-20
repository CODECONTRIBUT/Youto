import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number,
    next: string | null,
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        //As this is a free API and our React app contains only front-end, so show here.
        //But in production env, we should put key on the back-end as security consideration.
        key: 'cfcef6314d9540b186eb4d3a6062e345'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (requestConfig: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, requestConfig)
                            .then(response => response.data);
    }
}

export default APIClient;