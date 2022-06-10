import { axios } from 'hooks/worker'
// import { cheerio } from 'cheerio'
import { IBoxofficeAPIRes } from 'types/dailyBoxoffice'
import { IMovieSearchAPIRes } from 'types/movieInfo.d'

const BASE_URL = 'http://kobis.or.kr/kobisopenapi/webservice/rest'

interface IBoxofficeParams {
  targetDt: string
}

interface IMovieSearchParams {
  movieCd: string
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

// export const getMoviePoster = (params: IMovieSearchParams) => {
//   let $href = []
//   axios.get(`https://thebook.io/080212`).then((dataa) => {
//     const $ = cheerio.load(dataa.data)
//     $('section.book-toc>ul>li>a').each((index: any, item: { attribs: { href: any } }) => {
//       $href.push(item.attribs.href)
//     })
//   })
// }
