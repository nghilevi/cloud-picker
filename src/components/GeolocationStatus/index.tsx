import { GeolocationStatusText, Status } from "../../utils/constants";

type GeolocationStatusProps = {
  geolocationStatus: string,
  userLatitude: number,
  userLongitude: number
};

const GeolocationStatus = ({ geolocationStatus, userLatitude, userLongitude }: GeolocationStatusProps) => {

  const render = ({ geolocationStatus, userLatitude, userLongitude }: GeolocationStatusProps) => {
    let statusText
    switch (geolocationStatus) {
      case Status.Loading:
        statusText = <p data-testid='geo-loading-status'>{GeolocationStatusText.Loading}</p>
        break;
      case Status.Success:
        statusText = <p data-testid='geo-loading-status'>{GeolocationStatusText.Success} {userLatitude}, {userLongitude}</p>
        break;
      case Status.Unavailable:
        statusText = <p data-testid='geo-loading-status'>{GeolocationStatusText.Unavailable} {GeolocationStatusText.Default}</p>
        break;
      case Status.Failure:
        statusText = <p data-testid='geo-loading-status'>{GeolocationStatusText.Failure} {GeolocationStatusText.Default}</p>
        break;
      default: // no implementation
        statusText = <p data-testid='geo-loading-status'></p>
    }
    return statusText
  }

  return (
    <>{render({ geolocationStatus, userLatitude, userLongitude })}</>
  )

}

export default GeolocationStatus;