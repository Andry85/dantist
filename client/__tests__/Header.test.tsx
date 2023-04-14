import { render, screen } from '@testing-library/react'
import Header from '../components/Header/Header'
import '@testing-library/jest-dom'

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

describe('Header', () => {
  it('renders header logo', () => {
    render( <Header />)
    const headerLogo = screen.getByAltText(/logo/i);
    expect(headerLogo).toBeInTheDocument()
  })
})