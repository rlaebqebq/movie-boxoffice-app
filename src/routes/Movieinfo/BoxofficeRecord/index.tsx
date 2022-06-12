import { useRecoilValue } from 'recoil'
import { lazy, Suspense } from 'react'

import LoadingPage from 'components/LoadingPage'
import { targetMovieOpenDtState, todayDtState } from 'states/movie'
import { IWeekRecordData } from 'types/movie'

import RecordItem from './recordItem'

const RecordGraph = lazy(() => import('./recordGraph'))

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

  return <Suspense fallback={<LoadingPage />}>{dateGap > 0 && <RecordGraph {...weekRecord} />}</Suspense>
}

export default BoxofficeRecord
