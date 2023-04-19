import { useState } from 'react'
import {
  Backdrop,
  Box,
  CircularProgress,
  Pagination,
  Stack,
  Typography
} from '@mui/material'
import { useQuery, useQueryClient } from 'react-query'

import { ArticleQueriesContext } from '../src/context/article-query-context'
import getNewsArticles from './../src/queries/news'
import SearchBar from '../src/components/search-bar'
import NewsList from '../src/components/news-card-list'

const handleChangeGeneral = (event, params, target, setter, callback, page) => {
  setter((prev) => ({
    ...prev,
    [target]: {
      ...prev[target],
      value: event.target?.value || page,
    },
  }))

  callback({
    ...params,
    [target]: { 
      ...params[target],
      value: event.target?.value || page
    }
  })
}

const handleChangeCategory = (event, params, setter, callback) => {
  setter((prev) => ({
    ...prev,
    ['page']: {
      ...prev['page'],
      value: 1,
    },
    ['category']: {
      ...prev['category'],
      value: event.target.value,
    },
  }))

  callback({
    ...params,
    ['page']: { 
      value: 1,
    },
    ['category']: {
      value: event.target.value,
    },
  })
}

const handleChangeSearch = (searchTerm, setter) => {
  setter((prev) => ({
    ...prev,
    ['page']: { ...prev['page'], value: 1 },
    ['searchTerm']: {
      ...prev['searchTerm'],
      value: searchTerm,
    },
  }))
}

function HomePage() {
  const queryClient = useQueryClient()
  const fireGetNewsArticles = (queryParams) => {
    const { category, searchTerm, pageSize, page, sortBy } = queryParams
    const queryKey = [
      category.value,
      searchTerm.value,
      pageSize.value,
      page.value,
      sortBy.value
    ]

    if ( category.value !== 'everything') {
      queryKey[queryKey.length - 1] = 'publishedAt'
    }

    queryClient.fetchQuery(
      queryKey,
      () =>
        getNewsArticles({
          category: category.value,
          q: searchTerm.value,
          pageSize: pageSize.value,
          page: page.value,
          sortBy: sortBy.value,
        }),
      {
        retry: false,
        staleTime: 1000 * 60 * 60 * 24
      }
    )
  }

  const [queryParams, setQueryParams] = useState({
    category: {
      value: 'everything',
      handleCategoryChange: 
        (event) => 
          handleChangeCategory(
            event,
            queryParams,
            setQueryParams,
            fireGetNewsArticles
          ),
    },
    searchTerm: {
      // eslint-disable-next-line quotes
      value: "",
      handleSearchTermChange: 
        (term) => handleChangeSearch(term, setQueryParams),
    },
    pageSize: {
      value: 5,
      handleArticlesPerPageChange:
        (event) =>
          handleChangeGeneral(
            event,
            queryParams,
            'pageSize',
            setQueryParams,
            fireGetNewsArticles
          ),
    },
    page: {
      value: 1,
      handlePaginationChange:
        (event, page) => 
          handleChangeGeneral(
            event,
            queryParams,
            'page',
            setQueryParams,
            fireGetNewsArticles,
            page
          ),
    },
    sortBy: {
      value: 'publishedAt',
      handleSortByChange:
        (event) => 
          handleChangeGeneral(
            event,
            queryParams,
            'sortBy',
            setQueryParams,
            fireGetNewsArticles
          ),
    }
  })

  const {
    data,
    isLoading,
    isError
  } = useQuery(
    [
      queryParams.category.value,
      queryParams.searchTerm.value,
      queryParams.pageSize.value,
      queryParams.page.value,
      queryParams.sortBy.value
    ],
    () => 
      getNewsArticles({
        category: queryParams.category.value,
        q: queryParams.searchTerm.value,
        pageSize: queryParams.pageSize.value,
        page: queryParams.page.value,
        sortBy: queryParams.sortBy.value,
      }),
    {
      retry: false, 
      staleTime: 1000 * 60 * 60 * 24
    }
  )
  
  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          color="error"
          fontWeight="bold"
          fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.5rem' }}
        >
          Oh No! Something went wrong! Please try again later.
        </Typography>
      </Box>
    )
  }

  
  const { articles, totalResults } = data
  const totalPages = Math.floor(totalResults / queryParams.pageSize.value)

  return (
    <ArticleQueriesContext.Provider value={queryParams}>
      <Stack spacing={4} my={{ xs: 5 }}>
        <SearchBar fireQuery={fireGetNewsArticles} />
        <NewsList articles={articles} />
        <Pagination
          sx={{ alignSelf: 'center' }}
          shape="rounded" 
          count={totalPages} 
          page={queryParams.page.value}
          onChange={queryParams.page.handlePaginationChange}
          disabled={isLoading || totalPages === 0}
        />
      </Stack>
    </ArticleQueriesContext.Provider>
  )
}

export default HomePage
