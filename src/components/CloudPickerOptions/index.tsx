import { Cloud, Clouds } from "../../utils/types";
import CloudsOptions from "../CloudsOptions";
import ProvidersOptions from "../ProvidersOptions";
import RegionsOptions from "../RegionsOptions";
import SelectedOption from "../SelectedOption";

type CloudPickerOptionsProps = {
  clouds: Clouds,
  cloudRegionsByProvider: string[],
  cloudsByRegionAndProvider: Cloud[],
  selectedCloud: Cloud,
  selectedCloudProvider: string,
  selectedCloudRegion: string,
  onProviderClick: Function,
  onRegionClick: Function,
  onCloudClick: Function
}

const CloudPickerOptions = (
  {
    clouds, cloudRegionsByProvider, cloudsByRegionAndProvider,
    selectedCloud, selectedCloudProvider, selectedCloudRegion,
    onRegionClick, onCloudClick, onProviderClick
  }: CloudPickerOptionsProps) => {

  return (
    <div>
      <SelectedOption selectedCloud={selectedCloud} />
      <ProvidersOptions providers={clouds['providers'] as string[]} selectedCloudProvider={selectedCloudProvider}
        onProviderClick={onProviderClick} />
      <RegionsOptions cloudRegionsByProvider={cloudRegionsByProvider}
        selectedCloudRegion={selectedCloudRegion} onRegionClick={onRegionClick} />
      <CloudsOptions cloudsByRegionAndProvider={cloudsByRegionAndProvider}
        selectedCloud={selectedCloud} onCloudClick={onCloudClick} />
    </div>
  )
}

export default CloudPickerOptions;