import { axios } from 'hooks/worker'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieSearchAPIRes } from 'types/movieInfo.d'
import { IMoviePosterAPIRes } from 'types/moviePoster'

const BASE_URL = 'https://kobis.or.kr/kobisopenapi/webservice/rest'

const POSTER_BASE_URL = '//api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2'

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
