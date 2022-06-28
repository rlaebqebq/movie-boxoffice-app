import dayjs from 'dayjs'
import { lazy, Suspense } from 'react'

import { Loading } from 'components'
import { useRecoilState } from 'hooks/state'
import { useSearchWeeklyQuery } from 'hooks/query'
import { latestSundayDtState } from 'states'

import { ArrowleftIcon, ArrowrightIcon } from 'assets/svg'
import styles from './boxoffice.module.scss'

const BoxofficeList = lazy(() => import('./boxofficeList'))

interface IProps {
  inView: boolean
}

const WeeklyBoxoffice = ({ inView }: IProps) => {
  const [lastSundayDt, setLastSundayDt] = useRecoilState(latestSundayDtState)
  const data = useSearchWeeklyQuery(lastSundayDt.format('YYYYMMDD')).data?.boxOfficeResult

  const handlePrevWeek = () => {
    setLastSundayDt(lastSundayDt.subtract(7, 'day'))
  }
  const handleNextWeek = () => {
    if (dayjs().diff(lastSundayDt, 'day') > 1) setLastSundayDt(lastSundayDt.add(7, 'day'))
  }
  if (!inView) return null
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.title}>
        <button type='button' className={styles.prevButton} onClick={handlePrevWeek} aria-label='이전 날짜'>
          <ArrowleftIcon />
        </button>
        <p>{data?.showRange}</p>
        <button type='button' className={styles.nextButton} onClick={handleNextWeek} aria-label='다음 날짜'>
          <ArrowrightIcon />
        </button>
      </div>
      <Suspense fallback={<Loading />}>
        <BoxofficeList data={data} />
      </Suspense>
    </div>
  )
}

export default WeeklyBoxoffice
