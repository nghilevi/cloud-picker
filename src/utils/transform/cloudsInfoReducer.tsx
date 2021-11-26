import { Cloud } from "../types"

const cloudsInfoReducer = (clouds: any, cloud: Cloud) => {
    if (!clouds[cloud.provider]) { // first time encounter the provider
        clouds[cloud.provider] = { // populate regions, nearestRegion
            nearestRegion: cloud.region,
            [cloud.region]: [cloud]
        }
    } else {
        if (clouds[cloud.provider][cloud.region]) { // add service cloud filterd by region and provider
            clouds[cloud.provider][cloud.region].push(cloud)
        } else {
            clouds[cloud.provider][cloud.region] = []
        }
    }
    return clouds
}

export { cloudsInfoReducer }