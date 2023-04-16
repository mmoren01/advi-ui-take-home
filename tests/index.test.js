import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../pages'


test('loads and displays greeting', async () => {
  // ARRANGE
  render(<HomePage />)

  // ASSERT
  expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument()
})