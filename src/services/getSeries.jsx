import axios from 'axios'

const testApiKey = import.meta.env.APP_API_KEY
/*
  SERIES O SHOWS
  endPoint para buscar por id
  baseUrl ='https://api.tvmaze.com/shows/{idNumber}'

  endPoint para buscar por nombre ingles
  baseUrl ='https://api.tvmaze.com/search/shows?q={idString}'

  EndPoint para buscar por id las temporadas
  baseUrl ='https://api.tvmaze.com/shows/{idNumber}/seasons'

  EndPoint para buscar por id las temporadas y episodios en desorden
  baseUrl ='https://api.tvmaze.com/shows/{idNumber}/episodes'
  
*/

export const getSeries = async (idString='batman') => {

  const test = `https://api.tvmaze.com/search/shows?q=${idString}`
  const req = await axios.get(test)
  const res = req.status === 200 ? req.data : []
  return res
  
}
