import { axios } from 'hooks/worker'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieDetailAPIRes } from 'types/movieInfo.d'

const BASE_URL = 'https://kobis.or.kr/kobisopenapi/webservice/rest'

interface IBoxofficeParams {
  targetDt: string
}

interface IMovieDetailParams {
  movieCd: string
}

export const getBoxofficeApi = (params: IBoxofficeParams) =>
  axios.get<IBoxofficeAPIRes>(`${BASE_URL}/boxoffice/searchDailyBoxOfficeList.json`, {
    params: {
      key: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })

export const getMovieDetailApi = (params: IMovieDetailParams) =>
  axios.get<IMovieDetailAPIRes>(`${BASE_URL}/movie/searchMovieInfo.json?`, {
    params: {
      key: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })
