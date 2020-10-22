export const numberFormat = (price) => {
    if (isNaN(price)) return '0'
    // const pieces = parseFloat(price).toFixed(2).split('')
    const format = Math.round(price)
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    return format
}
