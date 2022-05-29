import {currFormat, dateFormat} from "../config/Formats";


export const arrayKVPair = (arr, key, value) => {
    let obj = [];
    arr.map((k, i) => {
        let child = {};
        child['index'] = i
        child['key'] = k[1]
        child['value'] = k[0]
        child['formatted-key'] = key +  usdFormatter(k[1])
        child['formatted-value'] = value +  dateFormatter(k[0])
        obj.push(child)
    })
    return obj;
}

export const formatKVPair = (arr, key, value) => {
    let obj = [];
    arr.map((k, i) => {
        let child = {};
        child[key] = usdFormatter(k[1])
        child[value] = dateFormatter(k[0])
        obj.push(child)
    })
    return obj;
}

export const usdFormatter = (num) => {
    return currFormat.format(num / 100)
}

export const dateFormatter = (date) => {
    return dateFormat.format(new Date(date))
}


