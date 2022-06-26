import { lazy, Suspense } from 'react'

import { useRecoilState } from 'hooks/state'
import { useSearchDailyQuery } from 'hooks/kobisQuery'
import { todayDtState } from 'states/movie'

import { ArrowleftIcon, ArrowrightIcon, BoxofficeIcon } from 'assets/svg'
import LoadingPage from 'components/LoadingPage'
import styles from './boxoffice.module.scss'
import dayjs from 'dayjs'

const BoxofficeList = lazy(() => import('./boxofficeList'))

const Boxoffice = () => {
  const [todayDt, settodayDt] = useRecoilState(todayDtState)
  const data = useSearchDailyQuery(todayDt.format('YYYYMMDD')).data?.boxOfficeResult

  const handlePrevWeek = () => {
    settodayDt(todayDt.subtract(1, 'day'))
  }
  const handleNextWeek = () => {
    if (dayjs().diff(todayDt, 'day') > 1) settodayDt(todayDt.add(1, 'day'))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <button type='button' className={styles.prevButton} onClick={handlePrevWeek} aria-label='이전 날짜'>
          <ArrowleftIcon />
        </button>
        <h3>Daily BoxOffice{data?.showRange.substring(0, 8)}</h3>
        <button type='button' className={styles.nextButton} onClick={handleNextWeek} aria-label='다음 날짜'>
          <ArrowrightIcon />
        </button>
      </div>
      <Suspense fallback={<LoadingPage />}>
        <BoxofficeList data={data} />
      </Suspense>
    </div>
  )
}

export default Boxoffice
