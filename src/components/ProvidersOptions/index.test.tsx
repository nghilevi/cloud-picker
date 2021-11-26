
import { fireEvent, render, screen } from '@testing-library/react';
import ProvidersOptions from '.';

describe('ProvidersOptions', () => {

    let providers: string[]
    let selectedCloudProvider: string
    let onProviderClick: Function

    beforeEach(() => {
        providers = ['AWS', 'UpCloud', 'Azure']
        selectedCloudProvider = 'AWS'
        onProviderClick = jest.fn()
        render(<ProvidersOptions providers={providers} selectedCloudProvider={selectedCloudProvider} onProviderClick={onProviderClick} />);
    })

    it('should render a list of cloud providers', () => {
        const renderedProviders = screen.getAllByTestId('provider').map(button => (button as any).name) as string[]
        expect(renderedProviders).toEqual(providers)
    });

    it('should render selected cloud provider', () => {
        const renderedSelectedProvider = screen.getAllByTestId('provider').filter(button => button.className === 'providers-list-item selected')
        expect((renderedSelectedProvider[0] as any).name).toEqual(selectedCloudProvider)
    });

    it('should call selectedCloudProvider callback with the selected cloud provider', () => {
        const element = screen.getAllByTestId('provider')[1]
        fireEvent.click(element)
        expect(onProviderClick).toHaveBeenCalledWith('UpCloud')
    });

})
