import { useState, createContext } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render } from '@testing-library/react'
import React from 'react'

import theme from '../../src/theme'
import { ArticleQueriesContext } from '../../src/context/article-query-context'

const handleChangeGeneral = (event, target, setter, page) => {
  setter((prev) => ({
    ...prev,
    [target]: {
      ...prev[target],
      value: event.target?.value || page,
    },
  }))
}

const handleChangeCategory = (event, setter) => {
  setter((prev) => ({
    ...prev,
    ['page']: { ...prev['page'], value: 1 },
    ['category']: {
      ...prev['category'],
      value: event.target?.value || page,
    },
  }))
}


const AllTheProviders = ({ children }) => {
  const queryClient = new QueryClient()
  const [queryParams, setQueryParams] = useState({
    category: {
      value: 'everything',
      handleCategoryChange: 
        (event) => handleChangeCategory(event, setQueryParams),
    },
    searchTerm: {
      // eslint-disable-next-line quotes
      value: "",
      handleSearchTermChange: 
        (event) => handleChangeGeneral(event, 'searchTerm', setQueryParams),
    },
    pageSize: {
      value: 5,
      handleArticlesPerPageChange:
        (event) => handleChangeGeneral(event, 'pageSize', setQueryParams),
    },
    page: {
      value: 1,
      handlePaginationChange:
        (event, page) => 
          handleChangeGeneral(event, 'page', setQueryParams, page),
    },
    sortBy: {
      value: 'publishedAt',
      handleSortByChange:
        (event) => handleChangeGeneral(event, 'sortBy', setQueryParams),
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ArticleQueriesContext.Provider value={queryParams}>
          {children}
        </ArticleQueriesContext.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }