
const finalizeTransforming = (clouds: any) => {
    const clonedClouds = { ...clouds }
    // sort and remove redundant providers & regions data
    clonedClouds.providers =
        Object.keys(clonedClouds).sort() // sort providers alphabetically
            .map((provider: string) => {
                Object.keys(clonedClouds[provider]).forEach((region: string) => {
                    if (clonedClouds[provider][region].length === 0) { // remove region without cloud service
                        delete clonedClouds[provider][region]
                    }
                })
                clonedClouds[provider].regions = Object.keys(clonedClouds[provider])
                    .sort() // sort regions alphabetically
                    .filter((region) => region !== 'nearestRegion') // exclude nearestRegion
                return provider
            })

    return clonedClouds
}

export { finalizeTransforming }