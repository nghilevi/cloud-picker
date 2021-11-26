
import { fireEvent, render, screen } from '@testing-library/react';
import RegionsOptions from '.';

describe('RegionsOptions', () => {

    let cloudRegionsByProvider: string[]
    let selectedCloudRegion: string
    let onRegionClick: Function

    beforeEach(() => {
        cloudRegionsByProvider = ['Europe', 'Asia', 'Africa']
        selectedCloudRegion = 'Asia'
        onRegionClick = jest.fn()
        render(<RegionsOptions cloudRegionsByProvider={cloudRegionsByProvider}
            selectedCloudRegion={selectedCloudRegion} onRegionClick={onRegionClick} />);
    })

    it('should render a list of regions', () => {
        const renderedRegions = screen.getAllByTestId('region').map(button => button.textContent) as string[]
        expect(renderedRegions).toEqual(cloudRegionsByProvider)
    });

    it('should render selected cloud region', () => {
        const renderedSelectedRegion = screen.getAllByTestId('region').filter(button => button.className === 'regions-list-item selected')
        expect(renderedSelectedRegion[0].textContent).toEqual(selectedCloudRegion)
    });

    it('should call onCloudClick callback with the selected cloud', () => {
        const element = screen.getByText(/Asia/i)
        fireEvent.click(element)
        expect(onRegionClick).toHaveBeenCalledWith('Asia')
    });

})
