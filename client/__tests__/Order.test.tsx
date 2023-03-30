import { render, screen } from '@testing-library/react';
import Order from '../components/Order/Order';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '@testing-library/jest-dom';



describe('Order', () => {
  it('renders order', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const phoneNumber = screen.getByPlaceholderText('Your telephone number');
    expect(phoneNumber).toBeInTheDocument()
  })
})