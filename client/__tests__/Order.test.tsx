import { render, screen, fireEvent } from '@testing-library/react';
import Order from '../components/Order/Order';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '@testing-library/jest-dom';



describe('Order', () => {
  it('phone should be rendered', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const phoneNumber = screen.getByPlaceholderText('Your telephone number');
    expect(phoneNumber).toBeInTheDocument()
  })

  it('name should be rendered', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const name = screen.getByPlaceholderText('Full name');
    expect(name).toBeInTheDocument()
  })

  it('button should be rendered', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const button = screen.getByTestId('submitBtn');
    expect(button).toBeInTheDocument()
  })

  it('date picker should be rendered', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const dateField = screen.getByTestId('dateField');
    expect(dateField).toBeInTheDocument()
  })

  it('name should be empty', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const name = screen.getByPlaceholderText(/Full name/i);
    expect(name.value).toBe("");
  })

  it('phone should be empty', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const phone = screen.getByPlaceholderText(/Your telephone number/i);
    expect(phone.value).toBe("");
  })

  it('submit button should be disabled', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const button = screen.getByTestId('submitBtn');
    expect(button).toBeDisabled();
  })

  it('name should be changed', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const name = screen.getByPlaceholderText(/Full name/i);
    const testValue = 'test';
    fireEvent.change(name,{target: {value: testValue}});
    expect(name.value).toBe(testValue);
  })

  it('submit button should not be disabled when inputs exist', () => {
    render( <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Order />
      </LocalizationProvider>)
    const button = screen.getByTestId('submitBtn');
    const name = screen.getByPlaceholderText(/Full name/i);
    const phone = screen.getByPlaceholderText(/Your telephone number/i);

    const testValue = 'test';

    fireEvent.change(name,{target: {value: testValue}});
    fireEvent.change(phone,{target: {value: testValue}});

    expect(button).not.toBeDisabled();
  })

})

