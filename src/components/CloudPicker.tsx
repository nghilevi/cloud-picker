import { useEffect, useState } from "react";
import { Status } from "../utils/constants";
import { Cloud, Clouds, CloudsByProviders } from "../utils/types";
import CloudPickerOptions from "./CloudPickerOptions";
import CloudsLoadingStatus from "./CloudsLoadingStatus";
import GeolocationStatus from "./GeolocationStatus";

type CloudPickerProps = {
  userLatitude: number,
  userLongitude: number,
  clouds: Clouds,
  geolocationStatus: string,
  rawCloudsStatus: string
}

function CloudPicker({ userLatitude, userLongitude, clouds, geolocationStatus, rawCloudsStatus }: CloudPickerProps) {

  // **** HOOKS ****

  const [cloudRegionsByProvider, setCloudRegionsByProvider] = useState<string[]>([])
  const [cloudsByRegionAndProvider, setCloudsByRegionAndProvider] = useState<Cloud[]>([])
  const [selectedCloudProvider, setSelectedCloudProvider] = useState('')
  const [selectedCloudRegion, setSelectedCloudRegion] = useState('')
  const [selectedCloud, setSelectedCloud] = useState<Cloud>()

  useEffect(() => {
    // if clouds data is populated BUT no cloud provider has been selected, then select it
    if (clouds.providers.length > 0 && selectedCloudProvider === '') {
      // select cloud provider by the nearest service cloud by default / the first provider presented in the clouds list
      selectProvider(clouds, Object.keys(clouds)[0])
    }
  })

  // **** SELECT LOGIC **** 

  const selectProvider = (clouds: Clouds, provider: string) => {
    const cloudsByProviders: CloudsByProviders = clouds[provider] as unknown as CloudsByProviders
    setSelectedCloudProvider(provider)
    setCloudRegionsByProvider(cloudsByProviders.regions as string[])
    selectRegion(clouds, provider, cloudsByProviders.nearestRegion as string)
  }

  const selectRegion = (clouds: Clouds, provider: string, region: string) => {
    const cloudsByProviders: CloudsByProviders = clouds[provider] as unknown as CloudsByProviders
    setSelectedCloudRegion(region)
    setCloudsByRegionAndProvider(cloudsByProviders[region] as Cloud[])
  }

  // **** EVENTS HANDLING **** 

  const onProviderClick = (cloudProvider: string) => {
    selectProvider(clouds, cloudProvider)
  }

  const onRegionClick = (region: string) => {
    selectRegion(clouds, selectedCloudProvider, region)
  }

  const onCloudClick = (cloud: Cloud) => {
    setSelectedCloud(cloud)
  }

  // **** RENDERING LOGIC ****

  return (
    <>
      <h1>Cloud Picker</h1>
      <GeolocationStatus
        geolocationStatus={geolocationStatus}
        userLatitude={userLatitude}
        userLongitude={userLongitude} />
      {
        rawCloudsStatus === Status.Loading || rawCloudsStatus === Status.Failure ?
          <CloudsLoadingStatus
            rawCloudsStatus={rawCloudsStatus}
          /> : geolocationStatus !== Status.Loading ?
            <CloudPickerOptions
              data-testid='cloud-picker-options'
              clouds={clouds}
              cloudRegionsByProvider={cloudRegionsByProvider}
              cloudsByRegionAndProvider={cloudsByRegionAndProvider}
              selectedCloud={selectedCloud as Cloud}
              selectedCloudProvider={selectedCloudProvider}
              selectedCloudRegion={selectedCloudRegion}
              onProviderClick={onProviderClick}
              onRegionClick={onRegionClick}
              onCloudClick={onCloudClick}
            /> : ''
      }
    </>
  )
}

export default CloudPicker;
