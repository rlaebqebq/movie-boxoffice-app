import { useRecoilValue } from 'recoil'

import { IBoxofficeGraphAPIRes } from 'types/boxofficeGraph'
import { targetMovieState } from 'states/movie'

import styles from './boxofficeGraph.module.scss'

interface Props {
  data?: IBoxofficeGraphAPIRes
}

const BoxofficeList = ({ data }: Props) => {
  const targetMovie = useRecoilValue(targetMovieState)

  // const movieCd = targetMovie.substring(10)
  // const movieDt = targetMovie.substring(0, 9)

  if (!data) return null
  // const handlePrevWeek = () => {
  //   setSundayDt(sundayDt.subtract(7, 'day'))
  // }
  // const handleNextWeek = () => {
  //   if (dayjs().diff(sundayDt, 'day') > 6) setSundayDt(sundayDt.add(7, 'day'))
  // }

  //  const [sundayDt, setSundayDt] = useRecoilState(weekDtState)

  // const filterResult = data.boxOfficeResult.weeklyBoxOfficeList.filter((item) => item.movieCd === movieCd)

  // console.log(filterResult.rankOldAndNew)
  // ({item.movieCd} === targetMovie)

  // const ned = data.boxOfficeResult.weeklyBoxOfficeList
  // const groupByData = groupBy(ned, 'showCnt')
  // console.log(groupByData)

  // let totalAudiCnt: string[] = []
  // data.boxOfficeResult.weeklyBoxOfficeList.map((item) => totalAudiCnt.push(item.audiCnt))

  // let totalScrnCnt: string[] = []
  // data.boxOfficeResult.weeklyBoxOfficeList.map((item) => totalScrnCnt.push(item.scrnCnt))

  // let totalShowCnt: string[] = []
  // data.boxOfficeResult.weeklyBoxOfficeList.map((item) => totalShowCnt.push(item.showCnt))

  // let totalSalesAmt: string[] = []
  // data.boxOfficeResult.weeklyBoxOfficeList.map((item) => totalSalesAmt.push(item.salesAmt))

  return (
    <div className={styles.title}>
      <h1>조회일{data.boxOfficeResult.showRange}</h1>
      <div className={styles.movieWrapper}>
        <ul>
          {data.boxOfficeResult.weeklyBoxOfficeList.map((item) => (
            <li key={item.rank}>
              <dl className={styles.rank}>
                <dt>무비코드 {item.movieCd}</dt>
                <dd>무비이름 {item.movieNm}</dd>
                <dd>개봉일 {item.openDt}</dd>
                <dd>랭크 {item.rank}</dd>
                <dd>관객수 {item.audiCnt}</dd>
                <dd>스크린수 {item.scrnCnt}</dd>
                <dd>상영횟수 {item.showCnt}</dd>
                <dd>랭크새로진입 {item.rankOldAndNew}</dd>
                <dd>매출액 {item.salesAmt}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BoxofficeList
