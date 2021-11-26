// **** DATA TRANSFORMATION LOGIC **** 

import { RawCloud, UserCoords } from "../types"
import { cloudsInfoReducer } from "./cloudsInfoReducer"
import { distanceComparator } from "./distanceComparator"
import { finalizeTransforming } from "./finalizeTransforming"
import { rawCloudMap } from "./rawCloudMap"

const transformCloudsData = (rawClouds: RawCloud[], userCoords: UserCoords) => {
    const clouds =
        rawClouds
            .map(rawCloudMap(userCoords))
            .sort(distanceComparator)
            .reduce(cloudsInfoReducer, {})

    return finalizeTransforming({...clouds})
}

export { transformCloudsData }