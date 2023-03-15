import { render, screen } from '@testing-library/react'
import Header from '../components/Header/Header'
import '@testing-library/jest-dom'
import { useRouter } from 'next/router'
import {menu, contacts} from '../data'

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
    render( <Header menu={menu} contacts={contacts} />)
    const headerLogo = screen.getByAltText(/logo/i);
    expect(headerLogo).toBeInTheDocument()
  })
})