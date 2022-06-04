import { axios } from 'hooks/worker'
import { IBoxofficeAPIRes } from 'types/boxoffice.d'
import { IMovieSearchAPIRes } from 'types/movieInfo.d'
import { IBoxofficeGraphAPIRes } from 'types/boxofficeGraph.d'

const BASE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest'

interface IBoxofficeParams {
  targetDt: string
}

interface IMovieSearchParams {
  movieCd: string
}
interface IBoxofficeGraphParams {
  targetDt: string
  weekGb: '0'
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

export const getBoxofficeGraphApi = (params: IBoxofficeGraphParams) =>
  axios.get<IBoxofficeGraphAPIRes>(`${BASE_URL}/boxoffice/searchWeeklyBoxOfficeList.json?`, {
    params: {
      key: process.env.REACT_APP_MOVIE_API_KEY,
      ...params,
    },
  })
