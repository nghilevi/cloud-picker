
import { render, screen } from '@testing-library/react';
import { DefaultCoords, GeolocationStatusText, Status } from '../../utils/constants';
import GeolocationStatus from '.';

describe('GeolocationStatus', () => {

    let geolocationStatus, userLatitude, userLongitude

    it('when fetching > should displays waiting text', () => {
        geolocationStatus = Status.Loading
        userLatitude = 0
        userLongitude = 0

        render(<GeolocationStatus geolocationStatus={geolocationStatus}
            userLatitude={userLatitude} userLongitude={userLongitude} />);

        expect(screen.getByText(new RegExp(GeolocationStatusText.Loading))).toBeInTheDocument()
    });

    it('when fetch successfully > should displays user latitude and longitude', () => {
        geolocationStatus = Status.Success
        userLatitude = 10
        userLongitude = 10

        render(<GeolocationStatus geolocationStatus={geolocationStatus}
            userLatitude={userLatitude} userLongitude={userLongitude} />);

        expect(screen.getByText(new RegExp('' + userLatitude))).toBeInTheDocument()
        expect(screen.getByText(new RegExp('' + userLongitude))).toBeInTheDocument()
    });

    it('when fetch failed > should displays user latitude and longitude', () => {
        geolocationStatus = Status.Failure
        userLatitude = DefaultCoords.lat
        userLongitude = DefaultCoords.lon

        render(<GeolocationStatus geolocationStatus={geolocationStatus}
            userLatitude={userLatitude} userLongitude={userLongitude} />);

        const geoLoadingStatus = screen.getByTestId('geo-loading-status').textContent
        const expectedStatus = GeolocationStatusText.Failure + ' '+GeolocationStatusText.Default 
        expect(geoLoadingStatus).toBe(expectedStatus)
        
    });

})
