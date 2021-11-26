// reference: htmlgoodies.com/javascript/calculate-the-distance-between-two-points-in-your-web-apps/
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number, unit: string = 'K') => {
    if (typeof lat1 !== 'number' || typeof lon1 !== 'number' ||
        typeof lat2 !== 'number' || typeof lon2 !== 'number' || typeof unit !== 'string'
        || ['K', 'N'].indexOf(unit) === -1) {
        return NaN
    }
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit === 'K') { dist = dist * 1.609344 }
    if (unit === 'N') { dist = dist * 0.8684 }
    return dist
}

export { getDistance }