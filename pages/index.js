import { Box, Typography } from '@mui/material'
import { useQuery, useQueryClient } from 'react-query'

import getEverything from './../src/queries/news/everything'

function HomePage() {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery('news', getEverything, { retry: false })

  if (isLoading) {
    return <Box>Loading...</Box>
  }

  if (isError) {
    return <Box>Error</Box>
  }

  return (
    <Box textAlign="center">
      <Typography variant="h1">
        Welcome to Next.js!
      </Typography>
    </Box>
  )
}

export default HomePage
