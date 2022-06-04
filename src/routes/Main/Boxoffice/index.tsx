import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { getBoxofficeApi } from 'axios/movie'
import { isAxiosError } from 'utils/axios'
import { targetDtState } from 'states/movie'
import LoadingPage from 'components/LoadingPage'

import BoxofficeList from './boxofficeList'
import styles from './boxoffice.module.scss'

const Boxoffice = () => {
  const sundayDt = useRecoilValue(targetDtState)
  const targetDt = sundayDt.format('YYYYMMDD')

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
    <div className={styles.boxofficeWrapper}>
      {isLoading && <LoadingPage />}
      <BoxofficeList data={data} />
    </div>
  )
}

export default Boxoffice
