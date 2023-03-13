import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"

type matchesData = {
    data: {

    }
}

export const useAxios = (url: string) => {
    const [response, setResponse] = useState<any>([])
    const [isNetworkError, setIsNetworkError] = useState(false)
    const fetchMatches = async (): Promise<matchesData[]> => {
        console.log('calling ', url)
        try {
            const options = {
                url: url,
                method: 'GET',
                mode: "no-cors",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            }
            const response = await axios(options)
            console.log('the response of the data is', response.data)
            setResponse(response.data.data)
            return
        } catch (error) {
            if (error.response) {
            } else if (error.request) {
                setIsNetworkError(true)
            }
            console.log('Error fetching match', error)
        }
    }
    const { data, isLoading, isSuccess, isError, error } = useQuery<matchesData[], Error>(url, fetchMatches)

    return [response, isNetworkError, isLoading]

}


