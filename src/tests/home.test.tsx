import { render } from '@testing-library/react'

const Home = () => {
  return <div>Home</div>
}

describe('Home Test', () => {
  it('renders home', () => {
    render(<Home />)
    expect(1).toBe(1)
  })
})
