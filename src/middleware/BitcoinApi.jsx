

export function fetchBCH () {
    return (
        fetch("https://index-api.bitcoin.com/api/v0/cash/price/usd", "")
    )
}