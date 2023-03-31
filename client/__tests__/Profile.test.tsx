import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import Profile from '../components/Profile/Profile';
import '@testing-library/jest-dom'
import {profile} from '../data'



describe('Profile', () => {
  it('renders Reviews title', () => {
    render( <Profile profile={profile} />)
    const reviewsTitle = screen.getByText(/Reviews/i);
    expect(reviewsTitle).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  })
})
