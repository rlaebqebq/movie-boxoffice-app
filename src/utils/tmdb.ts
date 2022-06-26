import { axios } from 'hooks/worker'
import { ITmdbImageAPIRes } from 'types/tmdbImage'
import { ITmdbTrendingAPIRes } from 'types/tmdbTrending'

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

export const getTmdbImageApi = ({ query, primaryReleaseYear }: { query: string; primaryReleaseYear: number }) =>
  axios.get<ITmdbImageAPIRes>(
    `${TMDB_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko&query=${query}&primary_release_year=${primaryReleaseYear}`
  )

export const getTmdbTrendingApi = ({ validTime = 'day' }: { validTime: string }) =>
  axios.get<ITmdbTrendingAPIRes>(
    `${TMDB_BASE_URL}/trending/movie/${validTime}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko`
  )
