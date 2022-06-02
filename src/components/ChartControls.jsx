import {Select} from 'antd';
import {setDateRange} from "../services/slices/chartDataSlice";

const {Option} = Select;

export default function ChartControls({dispatch}) {


    const handleChange = (value) => {
        dispatch(setDateRange(value))
    };

    return (
        <div>
            <p>Chart Controls</p>
            <div className={'chartControls'}>
                <Select
                    defaultValue="15 Years"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                >
                    <Option value={24}>24 Hours</Option>
                    <Option value={168}>7 Days</Option>
                    <Option value={720}>1 Month</Option>
                    <Option value={4320}>1 Month</Option>
                    <Option value={8640}>1 Year</Option>
                </Select>
            </div>
        </div>
    )
}