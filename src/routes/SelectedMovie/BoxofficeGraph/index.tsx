import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { getBoxofficeGraphApi } from 'utils/movie'
import { weekDtState } from 'states/movie'
import { isAxiosError } from 'hooks/worker/axios'

import LoadingPage from 'components/LoadingPage'
import BoxofficeGraphList from './boxofficeGraphList'
import styles from './boxofficeGraph.module.scss'

const BoxofficeGraph = () => {
  const sundayDt = useRecoilValue(weekDtState)
  const targetDt = sundayDt.format('YYYYMMDD')
  const weekGb = '0'

  const { data, isLoading } = useQuery(
    ['getBoxofficeGraphApi', targetDt, weekGb],
    () => getBoxofficeGraphApi({ targetDt, weekGb }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      onError(err) {
        if (isAxiosError(err)) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      },
    }
  )

  return (
    <div className={styles.pageWrapper}>
      {isLoading && <LoadingPage />}
      <BoxofficeGraphList data={data} />
    </div>
  )
}

export default BoxofficeGraph
