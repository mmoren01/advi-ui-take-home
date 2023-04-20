import axios from 'axios'

import sampleData from '../../../sample-data.json'

export default async function handler(req, res) {
  if (process.env.LOCAL_HOST_MODE === 'true') {
    const { pageSize, page } = req.query
    const startIndex = (parseInt(page) - 1) * parseInt(pageSize)
    const endIndex = startIndex + parseInt(pageSize)
    const pageData = sampleData.articles.slice(startIndex, endIndex)
    
    console.log('Development mode detected. Returning sample data.')
    res.status(200).json({ ...sampleData, articles: pageData })
    res.end()
    return
  }

  try {
    const { method, url, query } = req
    let queryUrl, params

    if ( query.path[0] === 'everything' ) {
      const { language, pageSize, page, q, sortBy } = query
      queryUrl = new URL(`${process.env.NEWS_API_URL}/everything`)
      params = { q, pageSize, page, language, sortBy }
    }

    if ( query.path[0] === 'top-headlines' ) {
      const { country, category, q, pageSize, page } = query
      queryUrl = new URL(`${process.env.NEWS_API_URL}/top-headlines`)
      params = { country, category, q, pageSize, page }
    }
    
    const { data, status } = await axios.get(queryUrl.toString(), {
      headers: {
        'X-Api-Key': process.env.NEWS_API_KEY,
      },
      params,
    })

    res.status(status).json(data)
    res.end()
    
  } catch(response) {
    console.log('Error', response)
    const { data: error, status } = response
    res.status(response?.status).json({ error })
    res.end()
  }
}