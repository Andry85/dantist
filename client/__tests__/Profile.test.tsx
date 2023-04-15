import { render, screen } from '@testing-library/react'
import Profile from '../components/Profile/Profile';
import '@testing-library/jest-dom'
import {profile} from '../data'



describe('Profile', () => {
  it('renders image in profile', () => {
    render( <Profile profile={profile} />)
    const reviewsTitle = screen.getByText(/Reviews/i);
    expect(reviewsTitle).toBeInTheDocument();
  });

  it('renders title in profile', () => {
    render( <Profile profile={profile} />)
    const pic = screen.getByRole('img')
    expect(pic).toBeInTheDocument();
  });

  it('renders Reviews stars', () => {
    render( <Profile profile={profile} />);
    const reviewsList = screen.getByTestId('skills');
    expect(reviewsList.children).toHaveLength(5);
  });
})
