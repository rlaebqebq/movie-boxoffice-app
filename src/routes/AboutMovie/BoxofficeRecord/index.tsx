import { useRecoilValue } from 'recoil'
import { Suspense } from 'react'

import { targetMovieOpenDtState, todayDtState } from 'states/movie'

import LoadingPage from 'components/LoadingPage'
import styles from './boxofficeRecord.module.scss'
import RecordItem from './recordItem'
import RecordGraph from './recordGraph'
import { IWeekRecordData } from 'types/movie'

const BoxofficeRecord = () => {
  const todayDt = useRecoilValue(todayDtState)
  const movieOpenDt = useRecoilValue(targetMovieOpenDtState)

  const ranges = []
  const weekRecord: IWeekRecordData[] = []
  const dateGap = todayDt.diff(movieOpenDt, 'day')

  let currentDate
  dateGap < 7 ? (currentDate = movieOpenDt) : (currentDate = todayDt.subtract(7, 'day'))
  while (currentDate.isBefore(todayDt, 'day')) {
    currentDate = currentDate.add(1, 'day')
    ranges.push(currentDate.format('YYYYMMDD'))
  }
  ranges.map((item) => weekRecord.push({ date: item, data: RecordItem(item) }))

  return (
    <div className={styles.graphWrapper}>
      <Suspense fallback={<LoadingPage />}>
        {dateGap > 0 ? <RecordGraph {...weekRecord} /> : <p>개봉전입니다</p>}
      </Suspense>
    </div>
  )
}

export default BoxofficeRecord
