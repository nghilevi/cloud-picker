
import { render, screen } from '@testing-library/react';
import { SelectedOptionText } from '../../utils/constants';
import SelectedOption from '.';
import * as Mock from '../../../test/mock'
import { Cloud } from '../../utils/types';

describe('SelectedOption', () => {

  it('when cloud is selected > it should be display', () => {
    const selectedCloud = Mock.TransformedCloud
    render(<SelectedOption selectedCloud={selectedCloud} />);
    expect(screen.getByText(/Asia/)).toBeInTheDocument();
  });

  it('when cloud is NOT selected > a default text should be display', () => {
    const selectedCloud = '' as unknown as Cloud
    render(<SelectedOption selectedCloud={selectedCloud} />);
    expect(screen.getByText(new RegExp(SelectedOptionText.Unselected))).toBeInTheDocument();
  });

})
