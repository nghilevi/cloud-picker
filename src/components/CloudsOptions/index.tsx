import { Cloud } from "../../utils/types";
import './index.scss';

type CloudsOptionsProps = {
  cloudsByRegionAndProvider: Cloud[],
  selectedCloud: Cloud,
  onCloudClick: Function
}

const CloudsOptions = ({ cloudsByRegionAndProvider, selectedCloud, onCloudClick }: CloudsOptionsProps) => {
  
  const renderCloudsOptions = () => {
    if(cloudsByRegionAndProvider && cloudsByRegionAndProvider.length > 0){
      return (
        <ol className="clouds-list">
          {
            cloudsByRegionAndProvider.map((cloud: Cloud, key: number) => {
              return (
                <li key={key}>
                  <button
                    data-testid='cloud-option'
                    className={`clouds-list-item ${selectedCloud?.description === cloud.description ? 'selected' : ''}`}
                    onClick={(e) => onCloudClick(cloud)}
                  >
                    <h3 data-testid='cloud-name'>{cloud.name} <span>📍 ~{cloud.distance} km</span></h3>
                    <p className='cloud-description'>{cloud.description}</p>
                  </button>
                </li>
              )
            })
          }
        </ol>
      )
    }else {
      return <></>
    }
  }

  return (
    <>
      {
        renderCloudsOptions()
      }
    </>
  )
}

export default CloudsOptions;