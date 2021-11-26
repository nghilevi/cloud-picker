import './index.scss';

type ProvidersOptionsProps = {
  providers: string[],
  selectedCloudProvider: string,
  onProviderClick: Function
}

const ProvidersOptions = ({ providers, selectedCloudProvider, onProviderClick }: ProvidersOptionsProps) => {
  return (
    <div className='providers'>
      <h3>1. Select Cloud Provider</h3>
      <ul className='providers-list'>
        {
          providers.map((cloudProvider: string, key: number) => {
            return (
              <li key={key}>
                <button
                  data-testid='provider'
                  name={cloudProvider}
                  className={`providers-list-item ${selectedCloudProvider === cloudProvider ? 'selected' : ''}`}
                  onClick={() => onProviderClick(cloudProvider)}>
                  <img src={`assets/logo/${cloudProvider}.png`} alt={cloudProvider} />
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ProvidersOptions;