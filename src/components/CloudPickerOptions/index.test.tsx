import { render, screen } from '@testing-library/react';
import * as Mock from '../../../test/mock'
import CloudPickerOptions from ".";
import { Cloud, Clouds, CloudsByProviders } from '../../utils/types';

describe('CloudPicker', () => {

    let clouds: Clouds

    let cloudRegionsByProvider: string[]
    let cloudsByRegionAndProvider: Cloud[]

    let selectedCloud: Cloud
    let selectedCloudProvider: string
    let selectedCloudRegion: string

    let onProviderClick: Function
    let onRegionClick: Function
    let onCloudClick: Function

    let cloudsByProviders: CloudsByProviders

    beforeEach(() => {
        clouds = Mock.CloudsAfterTransformation

        selectedCloudProvider = 'Azure'
        selectedCloudRegion = 'South Asia'

        cloudsByProviders = clouds[selectedCloudProvider] as unknown as CloudsByProviders
        selectedCloud = (cloudsByProviders[selectedCloudRegion][0] as unknown as Cloud)

        cloudRegionsByProvider = cloudsByProviders.regions as unknown as string[]
        cloudsByRegionAndProvider = cloudsByProviders[selectedCloudRegion] as unknown as Cloud[]

        onProviderClick = jest.fn()
        onRegionClick = jest.fn()
        onCloudClick = jest.fn()
    })

    it('should renders information based on what are passed in', () => {
        render(<CloudPickerOptions
            clouds={clouds}
            cloudRegionsByProvider={cloudRegionsByProvider}
            cloudsByRegionAndProvider={cloudsByRegionAndProvider}
            selectedCloud={selectedCloud}
            selectedCloudProvider={selectedCloudProvider}
            selectedCloudRegion={selectedCloudRegion}
            onProviderClick={onProviderClick}
            onRegionClick={onRegionClick}
            onCloudClick={onCloudClick}
        />);
        expect(screen.getByText('Asia, India - Azure: West India')).toBeInTheDocument();
        expect(screen.getByText('South Asia')).toBeInTheDocument();
    });
})

