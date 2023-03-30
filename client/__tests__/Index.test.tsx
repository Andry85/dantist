import { render, screen } from '@testing-library/react';
import IndexPage from '../pages/index';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '@testing-library/jest-dom';

describe('IndexPage', () => {
  it('renders text', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <IndexPage />
    </LocalizationProvider>)

    const testText = screen.getByText(/Index page/i);

    expect(testText).toBeInTheDocument()
  })
})