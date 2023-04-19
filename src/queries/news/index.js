import axios from 'axios'

const getNewsArticles = ({ category, q, pageSize, page, sortBy }) => {
  let query
  if (category === 'everything') {
    query = axios.get('/api/news/everything', {
      params: {
        language: 'en',
        pageSize,
        page,
        q: q || 'all',
        sortBy,
      }
    })
  } else {
    query = axios.get('/api/news/top-headlines', {
      params: {
        category,
        q,
        pageSize,
        page,
      }
    })
  }

  return query.then((response) => {
    return response.data
  })
    .catch((error) => {
      console.log('Error', error)
      throw error
    })
}

export default getNewsArticles
