import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Cloud Picker')).toBeInTheDocument();
  });
})
