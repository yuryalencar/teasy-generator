import axios from 'axios'

const token = 'aed099c55d89b31f8ec52edf26b23c39'
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${token}`

const Api = axios.create({
  baseURL: `${url}`,
  contentType: 'application/x-www-form-urlencoded',
  headers: { 'Content-Type': 'application/json' },
})

export default Api
