import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import Preambule from '../components/Preambule/Preambule';
import '@testing-library/jest-dom'
import {preambule} from '../data'



describe('Preambule', () => {
  it('renders text desc', () => {
    render( <Preambule preambule={preambule} />)
    const preambuletext = screen.getByText(/Lorem Ipsum/i);
    expect(preambuletext).toBeInTheDocument()
  })
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Preambule preambule={preambule}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});