import axios from 'axios'

import sampleData from '../../../sample_data.json'

export default async function handler(req, res) {  
  if (process.env.LOCAL_HOST_MODE === 'true') {
    console.log('Development mode detected. Returning sample data.')
    res.status(200).json(sampleData)

    res.end()
    return
  }
  
  try {
    const { method, query: { path }, url } = req
    const requestEndpoint = path[0]
    const queryUrl = new URL(`${process.env.NEWS_API_URL}/${url.replace('/api/news/', '')}`)

    if (method === 'GET' && requestEndpoint === 'everything') {
      const { data, status } = await axios.get(queryUrl.toString(), {
        headers: {
          'X-Api-Key': process.env.NEWS_API_KEY,
        },
      })

      res.status(status).json(data)
      res.end()
    }
  } catch(response) {
    debugger
    const { data: error, status } = response
    res.status(response?.status).json({ error })
    res.end()
  }
}