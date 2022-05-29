import {LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis} from 'recharts'
import {useMemo, useState} from "react";
import axios from "axios";
import {Col, Divider, Row} from "antd";
import {arrayKVPair, formatKVPair} from "../utils/DataParser";
import CustomToolTip from "./tooltip/CustomToolTip";
import AxisLabel from "./axisLabels/AxisLabel";
///import {fetchBCH} from '../middleware/BitcoinApi'

export default function MainPage(props) {

    const [chartData, setChartData] = useState([])
    const [chartError, setChartError] = useState(0)
    const dateToday = new Date();

    const fetchAPI = () => {
        axios.get(
            "https://index-api.bitcoin.com/api/v0/history").then((response, error) => {
            if (response) {
                setChartData(response['data'])
            }
            if (error)
                setChartError(error)
        })
    }

    useMemo(() => fetchAPI(), [])

    return (
        <>
            <Col/>
            <Col>
                <Divider orientation="left">Responsive</Divider>
                <Row>
                    <LineChart width={640} height={480} data={arrayKVPair(chartData, 'USD', 'Date')}>
                        <Line type="monotone" stroke="#8884d8" dataKey={'key'}/>

                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey={'value'} axisComp={<AxisLabel/>}/>
                        <YAxis dataKey={"key"}/>
                        <Tooltip content={
                            <CustomToolTip
                                data={formatKVPair(chartData, 'USD', 'Date')}
                                title={'BCH Historical Value'}
                            />}
                        />
                    </LineChart>
                </Row>
            </Col>
            <Col/>

        </>
    )

}