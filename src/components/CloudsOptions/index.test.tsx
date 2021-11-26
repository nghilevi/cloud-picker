
import { fireEvent, render, screen } from '@testing-library/react';
import { Cloud } from '../../utils/types';
import CloudsOptions from '.';

describe('CloudsOptions', () => {

    let cloudsByRegionAndProvider: Cloud[]
    let selectedCloud: Cloud
    let onCloudClick: Function

    beforeEach(() => {
        cloudsByRegionAndProvider = [
            { name: 'cloud1', description: 'description1', distance: 1, latitude: 1, longitude: 1, region: 'region1', provider: 'provider1' },
            { name: 'cloud2', description: 'description2', distance: 2, latitude: 1, longitude: 1, region: 'region1', provider: 'provider1' },
            { name: 'cloud3', description: 'description3', distance: 3, latitude: 1, longitude: 1, region: 'region1', provider: 'provider1' }
        ]
        selectedCloud = cloudsByRegionAndProvider[1]
        onCloudClick = jest.fn()
        render(<CloudsOptions cloudsByRegionAndProvider={cloudsByRegionAndProvider}
            selectedCloud={selectedCloud} onCloudClick={onCloudClick} />);
    })

    it('should render a list of clouds', () => {
        const renderedRegions = screen.getAllByTestId('cloud-name')
        expect(renderedRegions.length).toEqual(cloudsByRegionAndProvider.length)
    });

    it('should render selected cloud region', () => {
        const renderedSelectedRegion = screen.getAllByTestId('cloud-option').filter(button => button.className === 'clouds-list-item selected')
        const cloudDescription = renderedSelectedRegion[0].children[1].textContent
        expect(cloudDescription).toEqual(selectedCloud.description)
    });

    it('should call onCloudClick callback with the selected cloud', () => {
        fireEvent.click(screen.getAllByTestId('cloud-option')[2])
        expect(onCloudClick).toHaveBeenCalledWith(cloudsByRegionAndProvider[2])
    });

})
