// transformed cloud data model

interface RawCloud {
    cloud_description: string,
    cloud_name: string,
    geo_latitude: number,
    geo_longitude: number,
    geo_region: string
}

interface Cloud {
    description: string,
    name: string,
    latitude: number,
    longitude: number,
    region: string,
    provider: string
    distance: number
}

interface CloudsByProviders {
    // key could be "South Asia", "nearestRegion", "regions" etc.
    [key: string]: Cloud[] | string | string[] // e.g [{distance: 1, ...}] | "South Asia" | ["South Asia"]
}

interface Clouds {
    // key could be e.g "Amazon Web Services"
    [key: string]: CloudsByProviders | string[], // string[] e.g providers: ["Amazon Web Services","Azure"]
}

interface UserCoords {
    lat: number, lon: number
}

export type { RawCloud, Cloud, UserCoords, CloudsByProviders, Clouds };
