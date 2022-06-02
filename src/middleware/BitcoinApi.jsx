import axios from "axios";
import {
    getHistoricalData, setCurrentError,
    setCurrentPrice,
    setDataError,
    setLoading,
    setNewsFeed
} from "../services/slices/chartDataSlice";
import raw from "../assets/samplefeed.txt"

export const fetchHistorical = (dispatch) => {

    axios.get(
        "https://index-api.bitcoin.com/api/v0/history").then(response => {
        dispatch(getHistoricalData(response['data']))
        dispatch(setLoading(false))
    }, dispatch(setDataError(true)))
}

export const fetchCurrent = (dispatch) => {
    axios.get("https://index-api.bitcoin.com/api/v0/cash/price/usd").then(response => {
        dispatch(setCurrentPrice(response['data']))
    }, dispatch(setCurrentError(true)))
}

// commented out the axios call because it's failing after too many tries
export const fetchFeed = async (dispatch) => {
    await fetch(raw).then(r => r.text()).then(text => {
        dispatch(setNewsFeed(text))
        return text
    },(e) => console.log('read error', e))
    //dispatch(setNewsError(true))
    /*axios.get("https://news.bitcoin.com/feed/").then(response => {
            dispatch(setNewsFeed(response['data']))
        }, () => {
        fetch(raw).then(r => r.text()).then(text => dispatch(setNewsFeed(text)))
            dispatch(setNewsError(true))
        }
    )*/
}
