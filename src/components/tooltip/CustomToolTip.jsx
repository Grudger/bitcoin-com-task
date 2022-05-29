import { Divider } from 'antd';

/**
 * Will work with any JSON Object, regardless of label; does not accept arrays though
 * @param payload default payload defined by the component
 * @param active weather the tooltip is active
 * @param title title String of the child
  * @returns {JSX.Element} Tooltip body to be rendered
 * @constructor
 */
export default function CustomToolTip({payload, active, data, title}) {

    const getCurrentValues = () => {
        const cursor = [payload[0]['payload']['index']];
        return (
            <>
                <Divider dashed={true}>{title}</Divider>
                {
                    Object.keys(data[cursor]).map((k, i) => {
                        return <p
                            className="label"
                            key={i + "-toolTip"}
                        >
                            {` ${k} : ${data[cursor][k]}`}
                        </p>
                    })
                }
            </>)
    }

    return (
        <div className={'Tooltip'}>
            {active &&
                getCurrentValues()
            }
        </div>
    )

}