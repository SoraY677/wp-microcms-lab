import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/graphql',
    headers: {
        'Content-Type': 'application/json'
    }
})

/**
 * GET
 */
export async function get<T>(query: string, { variables }: Record<string, any> = {}): Promise<T | undefined>{
    const body = {
        query,
        variables
    }

    try {
        const response = await axiosInstance.post('/', body)
        return response.data?.data as T
    } catch (e){
        console.error(e)
        return undefined
    }
}