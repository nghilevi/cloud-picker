import { useEffect, useState } from "react"
import { Status, CLOUDS_API_URL } from "../../utils/constants"
import { RawCloud } from "../../utils/types"

const useRawClouds = (cloudsApiUrl = CLOUDS_API_URL) => {

    const [rawClouds, setRawClouds] = useState<RawCloud[]>([])
    const [rawCloudsStatus, setRawCloudsStatus] = useState<string>(Status.Default)

    useEffect(() => {
        setRawCloudsStatus(Status.Loading)
        fetch(cloudsApiUrl)
            .then(data => data.json())
            .then((response) => {
                const rawClouds = response.clouds
                setRawCloudsStatus(Status.Success)
                setRawClouds(rawClouds)
            })
            .catch(() => {
                setRawCloudsStatus(Status.Failure)
                setRawClouds([])
            })
    }, [cloudsApiUrl])

    return { rawClouds, rawCloudsStatus }

}

export default useRawClouds