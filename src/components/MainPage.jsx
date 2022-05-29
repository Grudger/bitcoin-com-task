import {
    LineChart,
    Line,
    Tooltip,
    CartesianGrid,
    XAxis,
    YAxis,
    ScatterChart,
    ResponsiveContainer,
    Scatter
} from 'recharts'
import {useEffect, useState} from "react";
import {Divider} from "antd";
import {arrayKVPair, formatKVPair, usdFormatter} from "../utils/DataParser";
import CustomToolTip from "./tooltip/CustomToolTip";
import {fetchHistorical} from "../middleware/BitcoinApi";

export default function MainPage() {

    const [chartData, setChartData] = useState([])
    const [chartError, setChartError] = useState(0)
    //const dateToday = new Date();

    useEffect(() => {
        fetchHistorical().then((response, error) => {
            if (response)
                setChartData(response)
            else {
                console.log("Error")
                setChartError(error)
            }
        })

    }, [])


    return (
        <div className={'mainPageBody'}>
            <Divider orientation={'left'}>BCH Prices</Divider>
            {
                !chartError &&
                <ResponsiveContainer width={640} height='40 %'>
                    <div>
                        <LineChart
                            width={640}
                            height={480}
                            margin={{top: 20, right: 25, left: 25, bottom: 30}}
                            data={arrayKVPair(chartData, 'USD', 'Date')}>
                            <Line type="monotone" stroke="#8884d8" dataKey={'key'}/>
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis
                                dataKey={'formatted-value'}
                                type={'category'} angle={-15}
                            />
                            <YAxis
                                dataKey={"key"}
                                tickFormatter={(d) => usdFormatter(d)}
                            />
                            <Tooltip content={
                                <CustomToolTip
                                    data={formatKVPair(chartData, 'USD', 'Date')}
                                    title={'BCH Historical Value'}
                                />}
                            />
                        </LineChart>

                        <ScatterChart
                            width={730}
                            height={250}
                            margin={{top: 20, right: 25, left: 25, bottom: 30}}>

                            <Scatter
                                name="A school"
                                data={arrayKVPair(chartData, 'USD', 'Date')}
                                fill="#8884d8"/>
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis
                                dataKey={'formatted-value'}
                                type={'category'} angle={-15}
                            />
                            <YAxis
                                dataKey={"key"}
                                tickFormatter={(d) => usdFormatter(d)}
                            />
                            <Tooltip content={
                                <CustomToolTip
                                    data={formatKVPair(chartData, 'USD', 'Date')}
                                    title={'BCH Historical Value'}
                                />}
                            />
                        </ScatterChart>
                    </div>

                </ResponsiveContainer>}

        </div>
    )

}