import { render, screen, cleanup } from '@testing-library/react';
import GlobeIcon from '.';

describe('GlobeIcon', () => {

    it('when region is within Asia > should show Asia emoji', () => {
        render(<GlobeIcon region='East Asia' />);
        expect(screen.getByText(/🌏/)).toBeInTheDocument();

        cleanup()

        render(<GlobeIcon region='South Asia' />);
        expect(screen.getByText(/🌏/)).toBeInTheDocument();

        cleanup()

        render(<GlobeIcon region='Australia' />);
        expect(screen.getByText(/🌏/)).toBeInTheDocument();
    });

    it('when region is America > should show America emoji', () => {
        render(<GlobeIcon region='America' />);
        expect(screen.getByText(/🌎/)).toBeInTheDocument();

        cleanup()

        render(<GlobeIcon region='North America' />);
        expect(screen.getByText(/🌎/)).toBeInTheDocument();
    });

    it('when region is NOT within Asia or America > should show Europe-Africa emoji', () => {
        render(<GlobeIcon region='Africa' />);
        expect(screen.getByText(/🌍/)).toBeInTheDocument();

        cleanup()

        render(<GlobeIcon region='Europe' />);
        expect(screen.getByText(/🌍/)).toBeInTheDocument();
    });

})