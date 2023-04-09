import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import Login from '../components/Login/Login';
import '@testing-library/jest-dom'




describe('Login', () => {
  it('renders Login', () => {
    render( <Login />)
    const reviewsTitle = screen.getByText(/Reviews/i);
    expect(reviewsTitle).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  })
})
