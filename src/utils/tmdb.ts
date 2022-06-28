import { axios } from 'hooks/worker'
import { ITmdbImageAPIRes } from 'types'

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

export const getTmdbImageApi = ({ query, primaryReleaseYear }: { query: string; primaryReleaseYear: number }) =>
  axios.get<ITmdbImageAPIRes>(
    `${TMDB_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko&query=${query}&primary_release_year=${primaryReleaseYear}`
  )
