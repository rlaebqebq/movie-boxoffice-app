import { axios } from 'hooks/worker'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieSearchAPIRes } from 'types/movieInfo.d'
import { IMoviePosterAPIRes } from 'types/moviePoster'
import { ITmdbAPIRes } from 'types/tmdbSearch'

const BASE_URL = 'https://kobis.or.kr/kobisopenapi/webservice/rest'

const POSTER_BASE_URL =
  'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2'

const TMDB_BASE_URL = 'https://api.themoviedb.org/3/search/movie?'

interface IBoxofficeParams {
  targetDt: string
}

interface IMovieSearchParams {
  movieCd: string
}

interface IMoviePosterParams {
  title: string
  releaseDts: string
}

interface ITmdbParams {
  language: string
  query: string
  primary_release_year: number
}

export const getBoxofficeApi = (params: IBoxofficeParams) =>
  axios.get<IBoxofficeAPIRes>(`${BASE_URL}/boxoffice/searchDailyBoxOfficeList.json`, {
    params: {
      key: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })

export const getMovieInfoApi = (params: IMovieSearchParams) =>
  axios.get<IMovieSearchAPIRes>(`${BASE_URL}/movie/searchMovieInfo.json?`, {
    params: {
      key: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })

export const getMoviePosterApi = (params: IMoviePosterParams) =>
  axios.get<IMoviePosterAPIRes>(POSTER_BASE_URL, {
    params: {
      ServiceKey: process.env.REACT_APP_MOVIE_POSTER_API_KEY,
      ...params,
    },
  })
// https://api.themoviedb.org/3/search/movie?api_key=13d8cbb303f40ba6966f6aca37bcac52&language=ko&query=The%20Witch%3A%20Part%202.%20The%20Other%20One

export const getTmdbApi = (params: ITmdbParams) =>
  axios.get<ITmdbAPIRes>(TMDB_BASE_URL, {
    params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY,
      ...params,
    },
  })
