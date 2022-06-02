import {Divider} from "antd";
import ChartContainer from "./ChartContainer";
import ChartControls from "./ChartControls";
import {NewsFeed} from "./NewsFeed";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCurrent} from "../middleware/BitcoinApi";
import {usdFormatter} from "../utils/DataParser";

export default function MainPage() {

    const {currentPrice} = useSelector((state) => state.chartDataReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchCurrent(dispatch)
    }, [])

    return (
        <div className={'mainPageBody'}>
            <Divider orientation={'left'}>BCH Prices
                <p>Current Price : {usdFormatter(currentPrice['price'])}</p>
            </Divider>
            <div className={'rightFloat'}>
                <NewsFeed />
            </div>

            <ChartControls dispatch={dispatch}/>
            <ChartContainer/>

        </div>
    )

}