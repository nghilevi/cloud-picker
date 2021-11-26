import { Cloud } from "../types"

// sort by distance, smallest distance comes first
const distanceComparator = (cloud1: Cloud, cloud2: Cloud) => cloud1.distance - cloud2.distance

export { distanceComparator}