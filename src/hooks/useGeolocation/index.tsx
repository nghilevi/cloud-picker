import { useEffect, useState } from "react";
import { DefaultCoords, GeolocationStatusText, Status } from "../../utils/constants";

const useGeolocation = () => {

    const [userLatitude, setUserLatitude] = useState<number>(DefaultCoords.lat);
    const [userLongitude, setUserLongitude] = useState<number>(DefaultCoords.lon);
    const [geolocationStatus, setGeolocationStatus] = useState<string>(Status.Default)
    const [geolocationError, setGeolocationError] = useState<any>() // geolocation error type is unknown

    useEffect(() => {
        setGeolocationStatus(Status.Loading)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLatitude(position.coords.latitude);
                setUserLongitude(position.coords.longitude);
                setGeolocationStatus(Status.Success)
            }, (error) => {
                setGeolocationStatus(Status.Failure)
                setGeolocationError(error)
            });
        } else {
            setGeolocationStatus(Status.Unavailable)
            setGeolocationError(GeolocationStatusText.Unavailable)
        }
    }, [])

    return { userLatitude, userLongitude, geolocationStatus, geolocationError }
}

export default useGeolocation