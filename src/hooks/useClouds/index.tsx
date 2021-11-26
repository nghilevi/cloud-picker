import { useEffect, useState } from "react"
import { Status } from "../../utils/constants";
import { transformCloudsData } from "../../utils/transform/transformCloudsData";
import { Clouds } from "../../utils/types";
import useGeolocation from "../useGeolocation";
import useRawClouds from "../useRawClouds";

const useClouds = () => {

  const { rawClouds, rawCloudsStatus } = useRawClouds()
  const { userLatitude, userLongitude, geolocationStatus } = useGeolocation()
  const [clouds, setClouds] = useState<Clouds>({ providers: [] })

  useEffect(() => {

    const transformAllowed = rawCloudsStatus === Status.Success && geolocationStatus !== Status.Loading

    if (transformAllowed) {
      const transformedCloudsData = transformCloudsData(rawClouds, { lat: userLatitude, lon: userLongitude })
      setClouds(transformedCloudsData)
    }

  }, [userLatitude, userLongitude, rawCloudsStatus, geolocationStatus, rawClouds])

  return { userLatitude, userLongitude, rawCloudsStatus, geolocationStatus, clouds }

}

export default useClouds
