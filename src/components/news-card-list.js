import { useContext } from 'react'
import { Typography, Stack } from '@mui/material'
import { ArticleQueriesContext } from '../context/article-query-context'
import NewsCard from './news-card'


const NewsList = ({ articles }) => {
  const { value: category } = useContext(ArticleQueriesContext).category

  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h2" textTransform="capitalize">
        {category === 'everything' && 'All News'}
        {category !== 'everything' && `Top Headlines: ${category}`}
      </Typography>
      {articles.map((article) => (
        <NewsCard key={article.title} {...article} />
      ))}
    </Stack>
  )
}

export default NewsList
