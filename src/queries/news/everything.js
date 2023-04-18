import axios from 'axios'

const getEverything = () => {
  //TODO: Populate the query params with form data
  return axios.get('/api/news/everything?q=bitcoin')
}

export default getEverything
