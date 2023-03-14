import { render, screen } from '@testing-library/react'
import IndexPage from '../pages/index'
import '@testing-library/jest-dom'

describe('IndexPage', () => {
  it('renders header logo', () => {
    render(<IndexPage />)

    const headerLogo = screen.getByAltText(/logo/i, {exact: true});

    expect(headerLogo).toBeInTheDocument()
  })
})