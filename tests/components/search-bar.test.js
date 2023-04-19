import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import SearchBar from '../../src/components/search-bar'

describe('Search input field', () => {
  it('loads and displays search bar', async () => {
    render(<SearchBar />)

    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })

  it('a user can type into the search bar', async () => {
    render(<SearchBar />)

    const searchInput = screen.getByLabelText('Search')
    const searchTerm = 'Hello'

    expect(searchInput).toBeInTheDocument()
    await userEvent.type(searchInput, searchTerm)

    expect(searchInput).toHaveValue(searchTerm)
  })
})

describe('Category select field', () => {
  it('loads and displays categories', async () => {
    render(<SearchBar />)
  
    expect(screen.getByLabelText('Categories')).toBeInTheDocument()
  })

  it('a user can click on the dropdown menu and see all categories',
    async () => {
      render(<SearchBar />)

      const categories = screen.getByLabelText('Categories')
  
      expect(categories).toBeInTheDocument()
      await userEvent.click(categories)

      expect(
        screen.getByRole('option', { name: 'All' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'Business' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'Entertainment' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'General' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'Health' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'Science' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'Sports' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: 'Technology' })
      ).toBeInTheDocument()
    }
  )
  
  it('a user can select a category', async () => {
    render(<SearchBar />)

    const categories = screen.getByLabelText('Categories')
  
    expect(categories).toBeInTheDocument()
    await userEvent.click(categories)
    await userEvent.click(screen.getByText('Business'))

    expect(categories).toHaveTextContent('Business')
  })
})

describe('Articles Per Page select field', () => {
  it('loads and displays Articles Per Page', async () => {
    render(<SearchBar />)
  
    expect(screen.getByLabelText('Articles Per Page')).toBeInTheDocument()
  })

  it('a user can click on the dropdown menu and see all options',
    async () => {
      render(<SearchBar />)

      const articlesPerPage = screen.getByLabelText('Articles Per Page')
  
      expect(articlesPerPage).toBeInTheDocument()
      await userEvent.click(articlesPerPage)

      expect(
        screen.getByRole('option', { name: '5' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: '10' })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('option', { name: '15' })
      ).toBeInTheDocument()
    }
  )
  
  it('a user can select a number of Articles Per Page', async () => {
    render(<SearchBar />)

    const articlesPerPage = screen.getByLabelText('Articles Per Page')
  
    expect(articlesPerPage).toBeInTheDocument()
    await userEvent.click(articlesPerPage)
    await userEvent.click(screen.getByText('10'))

    expect(articlesPerPage).toHaveTextContent('10')
  })
})