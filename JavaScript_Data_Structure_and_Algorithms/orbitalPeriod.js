function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const result = [];
    for (let i = 0; i< arr.length; i++) {
        const a = earthRadius + arr[i].avgAlt
        const T = 2 * Math.PI * Math.sqrt((a * a * a) / GM)
        const item = {name: arr[i]['name'], orbitalPeriod: Math.round(T) }
        result.push(item)
    }
    return result;
  }

module.exports = {
    orbitalPeriod
}