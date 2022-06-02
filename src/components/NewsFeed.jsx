import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {fetchFeed} from "../middleware/BitcoinApi";


export function NewsFeed() {

    const {newsFeed} = useSelector((state) => state.chartDataReducer)
    const dispatch = useDispatch()
    let ref = useRef()
    let items = useRef()

    const parseFeed = (feed) => {
        const parser = new DOMParser();
        const feedElements = []

        if (newsFeed.length) {

            const parsedFeed = parser.parseFromString(feed, 'text/xml')
            if (parsedFeed) {

                ref = parser.parseFromString(newsFeed, 'text/xml');
                items = ref.childNodes[0].childNodes[1]
                items.childNodes.forEach((k, v) => {
                    if (k.tagName === 'item') {
                        //console.log(k.childNodes)
                        feedElements.push(
                            <div key={'feed-' + v}>
                                <a href={k.getElementsByTagName("link")[0].textContent}>
                                    <h4>{k.getElementsByTagName("title")[0].textContent}</h4>
                                    <p>{k.getElementsByTagName("p")[0]}</p>
                                    <p>{k.getElementsByTagName("pubDate")[0].textContent}</p>
                                </a>
                            </div>
                        )
                    }
                })

            }

            return (<div>{feedElements}</div>)
        }
    }

    useEffect(() => {
        // force the call to complete
        fetchFeed(dispatch).then(feed => parseFeed(feed))
    }, [])

    return (
        <div className={'newsFeed'}>
            <h4>Bitcoin News</h4>
            {parseFeed()}
            <a href={"www.bitcoin.com"}>
                <p>Read more on Bitcoin.com</p>
            </a>
        </div>
    )

}
