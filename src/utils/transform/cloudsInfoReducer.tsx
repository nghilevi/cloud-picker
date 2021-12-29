import { Cloud } from "../types"

// WARNING: this function should only be used with reduce
// the use of spread operator is controversial according to this article: https://www.richsnapp.com/article/2019/06-09-reduce-spread-anti-pattern
const cloudsInfoReducer = (clouds: any, cloud: Cloud) => {
    const clonedClouds = {...clouds}
    if (!clonedClouds[cloud.provider]) { // first time encounter the provider
        clonedClouds[cloud.provider] = { // populate regions, nearestRegion
            nearestRegion: cloud.region,
            [cloud.region]: [cloud]
        }
    } else {
        if (clonedClouds[cloud.provider][cloud.region]) { // add service cloud filterd by region and provider
            clonedClouds[cloud.provider][cloud.region].push(cloud)
        } else {
            clonedClouds[cloud.provider][cloud.region] = []
        }
    }
    return clonedClouds
}

export { cloudsInfoReducer }