import { lazy, Suspense } from 'react'

import { Loading } from 'components'
import { useRecoilValue } from 'hooks/state'
import { useSearchDailyQuery } from 'hooks/query'
import { todayDtState } from 'states'

import styles from './boxoffice.module.scss'

const BoxofficeList = lazy(() => import('./boxofficeList'))

interface IProps {
  inView: boolean
}

const DailyBoxoffice = ({ inView }: IProps) => {
  const todayDt = useRecoilValue(todayDtState)
  const data = useSearchDailyQuery(todayDt.format('YYYYMMDD')).data?.boxOfficeResult
  if (!inView) return null
  return (
    <div className={styles.outerWrapper}>
      <Suspense fallback={<Loading />}>
        <BoxofficeList data={data} />
      </Suspense>
    </div>
  )
}

export default DailyBoxoffice
