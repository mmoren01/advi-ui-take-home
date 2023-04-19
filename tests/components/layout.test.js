import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Layout from '../../src/components/layout'

test('loads and displays greeting', async () => {
  render(<Layout />)

  expect(screen.getByText('Advi-News')).toBeInTheDocument()
})