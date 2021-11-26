import { DefaultEmptyCloud } from "../constants"
import { Cloud, RawCloud, UserCoords } from "../types"
import { capitalizeFirstLetters } from "./capitalizeFirstLetters"
import { extractCloudProviderName } from "./extractCloudProviderName"
import { getDistance } from "./getDistance"

const rawCloudMap = (userCoords: UserCoords) => {
    return (cloud: RawCloud): Cloud => {

        // evaluate if value is null, undefined, 0, false, "", NaN
        if(!cloud || typeof cloud !== 'object'){
            return DefaultEmptyCloud
        }
        return {
            distance: Math.round(getDistance(cloud.geo_latitude, cloud.geo_longitude, userCoords.lat, userCoords.lon, 'K')),
            provider: extractCloudProviderName(cloud.cloud_description),
            region: capitalizeFirstLetters(cloud.geo_region),
            description: cloud.cloud_description || '',
            name: cloud.cloud_name || '',
            latitude: isNaN(cloud.geo_latitude) ? NaN : cloud.geo_latitude,
            longitude: isNaN(cloud.geo_longitude) ? NaN : cloud.geo_longitude
        }
    }
}

export {rawCloudMap}