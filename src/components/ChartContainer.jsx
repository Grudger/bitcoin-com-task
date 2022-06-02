import {
    CartesianGrid,
    Line,
    LineChart,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {arrayKVPair, formatKVPair, usdFormatter} from "../utils/DataParser";
import CustomToolTip from "./tooltip/CustomToolTip";
import {useDispatch, useSelector} from "react-redux";
import {StyledSpinner} from "./tooltip/LoadingSpinner";
import {useEffect} from "react";
import {fetchHistorical} from "../middleware/BitcoinApi";

export default function ChartContainer() {

    const {chartData, loading, dateRange} = useSelector((state) => state.chartDataReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchHistorical(dispatch);
    }, [])

    return (
        <div className={'chartContainer'}>
            {
                loading ? <StyledSpinner /> :
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
            }
        </div>
    )

}