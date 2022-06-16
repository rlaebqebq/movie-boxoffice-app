import { Suspense } from 'react'

import { useRecoilValue } from 'hooks/state'
import { useSearchDailyQuery } from 'hooks/movieQuery'
import { todayDtState } from 'states/movie'

import LoadingPage from 'components/LoadingPage'
import BoxofficeList from './boxofficeList'
import styles from './boxoffice.module.scss'

const Boxoffice = () => {
  const todayDt = useRecoilValue(todayDtState)
  const formatTodayDt = todayDt.format('YYYYMMDD')
  const data = useSearchDailyQuery(formatTodayDt).data?.boxOfficeResult

  return (
    <div className={styles.pageWrapper}>
      <Suspense fallback={<LoadingPage />}>
        <BoxofficeList data={data} />
      </Suspense>
    </div>
  )
}

export default Boxoffice
