import { useContext, useState } from 'react'
import {
  Button,
  TextField,
  MenuItem,
  Stack,
  Divider,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { debounce } from 'lodash'

import { ArticleQueriesContext } from '../context/article-query-context'
import { Search } from '@mui/icons-material'

const categories = [
  { value: 'everything', label: 'All' },
  { value: 'divider', label: null },
  { value: 'business', label: 'Business' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'general', label: 'General' },
  { value: 'health', label: 'Health' },
  { value: 'science', label: 'Science' },
  { value: 'sports', label: 'Sports' },
  { value: 'technology', label: 'Technology' },
]

const articlePerPageOptions = [5, 10, 15]

const SearchBar = ({ fireQuery }) => {
  const queryParams = useContext(ArticleQueriesContext)
  const { category, searchTerm, pageSize, sortBy } = queryParams
  
  const { value: categoryValue, handleCategoryChange } = category
  const { value: searchTermValue, handleSearchTermChange } = searchTerm
  const { value: articlesPerPage, handleArticlesPerPageChange } = pageSize
  const { value: sortByValue, handleSortByChange } = sortBy

  const [localSearchValue, setLocalSearchValue] = useState(searchTermValue)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))

  const handleSearch = (event) => {
    event.preventDefault()
    
    if (localSearchValue === '') {
      return
    }

    fireQuery({
      ...queryParams,
      searchTerm: { 
        ...searchTerm, 
        value: localSearchValue 
      }
    })
  }

  return ( 
    <Stack spacing={2}>
      <Stack spacing={2} direction={{ md: 'row-reverse' }}>
        <TextField
          label="Categories"
          name="categories"
          select
          value={categoryValue}
          onChange={handleCategoryChange}
          sx={{ width: { md: '50%' } }}  
        >
          {categories.map(({ value, label }, index) => {
            if (value === 'divider') {
              return <Divider key={index} />
            }

            return (
              <MenuItem
                key={value}
                value={value}
                sx={{ textTransform: 'capitalize' }}>
                {label}
              </MenuItem>
            )
          })}
        </TextField>
        <TextField
          label="Search"
          name="search"
          placeholder="Search"
          variant="outlined"
          value={localSearchValue}
          onChange={(event) => {
            setLocalSearchValue(event.target.value)
            debounce(() => handleSearchTermChange(localSearchValue), 1000)
          }}
          sx={{ width: { md: '50%' } }}
        />
      </Stack>
      <Stack
        spacing={1}
        pr={{ md: 2 }}
        direction={{ xs: 'row', md: 'row-reverse' }}
        justifyContent={{ md: 'flex-end' }}
        alignItems={{ md: 'center' }}
      >
        {!isMobile && (
          <Stack spacing={1} ml={4} direction="row" alignItems="center">
            <FormLabel id="filters-label">Sort By:</FormLabel>
            {categoryValue === 'everything' && (
              <RadioGroup
                row
                aria-labelledby="filters-label"
                name='filters'
                value={sortByValue}
              >
                <FormControlLabel
                  value="publishedAt"
                  control={<Radio />}
                  label="Published Date"
                  onChange={handleSortByChange}
                />
                <FormControlLabel
                  value="popularity"
                  control={<Radio />}
                  label="Popularity"
                  onChange={handleSortByChange}
                />
              </RadioGroup>
            )}
            {categoryValue !== 'everything' && (
              <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              Top Headlines are automatically sorted by latest published date
              </Typography>
            )}
          </Stack>)}
        <TextField
          label="Articles Per Page"
          name="articlesPerPage"
          select
          value={articlesPerPage}
          sx={{ width: { xs: '50%', md: '25%' }, alignSelf: 'start' }}
          onChange={handleArticlesPerPageChange}
        >
          {articlePerPageOptions.map((value) => (
            <MenuItem
              key={value}
              value={value}
              width="100%"
            >
              {value}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="outlined"
          color="info"
          startIcon={<Search/>}
          sx={{
            width: { xs: '50%', md: '25%' },
            borderColor: '#7a7a7a',
            color: '#7a7a7a',
            height: { md: '56px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
      {isMobile && ( <Stack spacing={1} mb={2}>
        <FormLabel id="filters-label">Sort By:</FormLabel>
        {categoryValue === 'everything' && (
          <RadioGroup
            row
            aria-labelledby="filters-label"
            name='filters'
            value={sortByValue}
          >
            <FormControlLabel
              value="publishedAt"
              control={<Radio />}
              label="Published Date"
              onChange={handleSortByChange}
            />
            <FormControlLabel
              value="popularity"
              control={<Radio />}
              label="Popularity"
              onChange={handleSortByChange}
            />
          </RadioGroup>
        )}
        {categoryValue !== 'everything' && (
          <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              Top Headlines are automatically sorted by latest published date
          </Typography>
        )}
      </Stack>)}
    </Stack>)
}

export default SearchBar