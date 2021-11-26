
import { render, screen } from '@testing-library/react';
import { CloudsStatusText, Status } from '../../utils/constants';
import CloudsLoadingStatus from '.';

describe('CloudsLoadingStatus', () => {

    let rawCloudsStatus

    it('when loading > should displays waiting text', () => {
        rawCloudsStatus = Status.Loading
        render(<CloudsLoadingStatus rawCloudsStatus={rawCloudsStatus} />);
        expect(screen.getByText(new RegExp(CloudsStatusText.Loading))).toBeInTheDocument()
    });

    it('when fail > should displays fail text', () => {
        rawCloudsStatus = Status.Failure
        render(<CloudsLoadingStatus rawCloudsStatus={rawCloudsStatus} />);
        expect(screen.getByText(new RegExp(CloudsStatusText.Failure))).toBeInTheDocument()
    });

})
