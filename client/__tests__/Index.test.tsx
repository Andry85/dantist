import { render, screen } from '@testing-library/react'
import IndexPage from '../pages/index'
import '@testing-library/jest-dom'

describe('IndexPage', () => {
  it('renders text', () => {
    render(<IndexPage />)

    const testText = screen.getByText(/simply/i);

    expect(testText).toBeInTheDocument()
  })
})