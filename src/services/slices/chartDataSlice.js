import {createSlice} from "@reduxjs/toolkit";

export const chartDataSlice = createSlice({

    name: 'ChartData',
    initialState: {
        chartData: [],
        loading: true,
        dataError: false,
        errorMessage: "",
        currentPrice: 0,
        currentError: false,
        newsFeed: [],
        newsError: false,
        dateRange: 129600
    },
    reducers: {

        getHistoricalData: (state, {payload}) => {
            state.chartData = payload
            state.loading = false
        },
        setDataError: (state, {payload}) => {
            state.dataError = payload
        },
        setLoading: (state, {payload}) => {
            state.loading = payload
        },
        setCurrentPrice: (state, {payload}) => {
            state.currentPrice = payload
        },
        setCurrentError: (state, {payload}) => {
            state.currentPrice = payload
        },
        setNewsFeed: (state, {payload}) => {
            state.newsFeed = payload
        },
        setNewsError: (state, {payload}) => {
            state.newsError = payload
        },
        setDateRange: (state, {payload}) => {
            state.dateRange = payload
        }

    }

})


export const {
    getHistoricalData,
    setDataError,
    setLoading,
    setCurrentPrice,
    setCurrentError,
    setNewsFeed,
    setNewsError,
    setDateRange
} = chartDataSlice.actions

export default chartDataSlice.reducer