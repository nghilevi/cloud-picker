import { render, screen } from '@testing-library/react';
import { CloudsStatusText, DefaultCoords, Status } from '../utils/constants';
import { Clouds } from '../utils/types';
import CloudPicker from './CloudPicker';
import * as Mock from '../../test/mock'

describe('CloudPicker', () => {
  let userLatitude: number
  let userLongitude: number
  let clouds: Clouds

  let geolocationStatus: string
  let rawCloudsStatus: string

  beforeEach(() => {
    userLatitude = DefaultCoords.lat
    userLongitude = DefaultCoords.lon
  })

  afterEach(() => {
    // always render geo loading status
    const GeoLoadingStatus = screen.getByTestId('geo-loading-status')
    expect(GeoLoadingStatus).toBeInTheDocument();
  })

  describe('when clouds are', () => {

    beforeEach(() => {
      clouds = Mock.CloudsAfterTransformation
      geolocationStatus = 'whatever'
    })

    /*beforeEach(() => {
      clouds = Mock.CloudsAfterTransformation
      geolocationStatus
    })*/

    describe('still fetching', () => {

      beforeEach(() => {
        clouds = Mock.CloudsAfterTransformation
        geolocationStatus = Status.Loading
      })

      it('should display cloud loading status text', () => {
        rawCloudsStatus = Status.Loading
        render(<CloudPicker
          userLatitude={userLatitude}
          userLongitude={userLongitude}
          clouds={clouds}
          geolocationStatus={geolocationStatus}
          rawCloudsStatus={rawCloudsStatus}
        />);
        const cloudLoadingStatus = screen.getByTestId('cloud-loading-status').textContent
        expect(cloudLoadingStatus).toBe(CloudsStatusText.Loading);
      });

    })

    describe('fetch fail', () => {

      beforeEach(() => {
        clouds = Mock.CloudsAfterTransformation
        geolocationStatus = Status.Loading
      })

      it('should display cloud loading status text', () => {
        rawCloudsStatus = Status.Failure
        render(<CloudPicker
          userLatitude={userLatitude}
          userLongitude={userLongitude}
          clouds={clouds}
          geolocationStatus={geolocationStatus}
          rawCloudsStatus={rawCloudsStatus}
        />);

        const cloudLoadingStatus = screen.getByTestId('cloud-loading-status').textContent

        expect(cloudLoadingStatus).toBe(CloudsStatusText.Failure);

      });

    })

  })

})
