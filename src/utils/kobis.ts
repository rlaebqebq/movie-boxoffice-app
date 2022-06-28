import { axios } from 'hooks/worker'
import { IDailyBoxofficeAPIRes, IWeeklyBoxofficeAPIRes, IMovieDetailAPIRes, ISearchMovieAPIRes } from 'types'

const BASE_URL = 'https://kobis.or.kr/kobisopenapi/webservice/rest'

interface IDailyBoxofficeParams {
  targetDt: string
}

interface IMovieDetailParams {
  movieCd: string
}

interface ISearchMovieParams {
  pageParam: number
  movieNm: string
}

export const getWeeklyBoxofficeApi = ({ targetDt }: { targetDt: string }) =>
  axios.get<IWeeklyBoxofficeAPIRes>(
    `${BASE_URL}/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_API_KEY}&weekGb=0&targetDt=${targetDt}`
  )

export const getDailyBoxofficeApi = (params: IDailyBoxofficeParams) =>
  axios.get<IDailyBoxofficeAPIRes>(`${BASE_URL}/boxoffice/searchDailyBoxOfficeList.json`, {
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

export const getSearchMovieApi = ({ pageParam = 1, movieNm }: ISearchMovieParams) =>
  axios
    .get<ISearchMovieAPIRes>(`${BASE_URL}/movie/searchMovieList.json`, {
      params: {
        key: process.env.REACT_APP_MOVIE_API_KEY,
        curPage: pageParam,
        movieNm,
      },
    })
    .then((res) => ({
      ...res,
      totalCnt: res.data.movieListResult.totCnt ? Number(res.data.movieListResult.totCnt) : 0,
      nextPage: pageParam + 1,
      isLast: pageParam === Math.ceil(+res.data.movieListResult.totCnt / 10),
    }))
