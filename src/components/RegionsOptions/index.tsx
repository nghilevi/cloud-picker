import './index.scss';

type RegionsOptionsProps = {
  cloudRegionsByProvider: string[],
  selectedCloudRegion: string,
  onRegionClick: Function
}

const RegionsOptions = ({ cloudRegionsByProvider, selectedCloudRegion, onRegionClick }: RegionsOptionsProps) => {
  return (
    <div className='regions'>
      <h3>2. Select Cloud by Region</h3>
      <ul className='regions-list'>
        {
          cloudRegionsByProvider.map((region: string, key: number) => {
            return (
              <li key={key}>
                <button
                  data-testid='region'
                  className={`regions-list-item ${selectedCloudRegion === region ? 'selected' : ''}`}
                  onClick={() => onRegionClick(region)}
                >
                  {region}
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default RegionsOptions;