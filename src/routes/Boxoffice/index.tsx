import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { getBoxofficeApi } from 'utils/movie'
import { todayDtState } from 'states/movie'
import { isAxiosError } from 'hooks/worker/axios'

import LoadingPage from 'components/LoadingPage'
import BoxofficeList from './boxofficeList'

import styles from './boxoffice.module.scss'

const Boxoffice = () => {
  const todayDt = useRecoilValue(todayDtState)
  const targetDt = todayDt.format('YYYYMMDD')

  const { data, isLoading } = useQuery(
    ['getBoxofficeApi', targetDt],
    () => getBoxofficeApi({ targetDt }).then((res) => res.data),
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
      <BoxofficeList data={data} />
    </div>
  )
}

export default Boxoffice
