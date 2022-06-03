import dayjs from 'dayjs'
import { useQuery } from 'react-query'

import { isAxiosError } from 'utils/axios'
import { getBoxofficeApi } from 'axios/movie'

import BoxofficeList from './boxofficeList'
import styles from './boxoffice.module.scss'

const Boxoffice = () => {
  // const targetDt = String(dayjs().format('YYYYMMDD'))
  // 매주 일요일에만 올라오는듯

  const targetDt = '20120101'

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
      {isLoading && 'loading...'}
      <BoxofficeList data={data} />
    </div>
  )
}

export default Boxoffice
