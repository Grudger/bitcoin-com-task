import {LineChart, Line} from 'recharts'
import {chartData as data} from '../assets/SampleData'
import {useEffect, useState} from "react";
import axios from "axios";
///import {fetchBCH} from '../middleware/BitcoinApi'

export default function MainPage(props) {

    const [chartData, setChartData] = useState(0)
    const [chartError, setChartError] = useState(0)
    const dateToday = new Date();

    const fetchAPI = () => {
        axios.get(
            "https://index-api.bitcoin.com/api/v0/history").then((response, error) => {
            if(response) {
                console.log(response['data'])
                setChartData(response['data'])
            }
            if (error)
                setChartError(error)
        })
    }

    useEffect(() => fetchAPI()  , [])

    return (
        <>

            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            </LineChart>
        </>
    )

}