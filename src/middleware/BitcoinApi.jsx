import axios from "axios";


export const fetchHistorical = () => {
    return axios.get(
        "https://index-api.bitcoin.com/api/v0/history").then((response) => {
        if (response['data']) {
            return response['data']
        }
        else
            return false
    })
}
