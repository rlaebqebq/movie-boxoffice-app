import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { useRecoilState } from 'hooks/state'
import { useSearchWeeklyQuery } from 'hooks/query'
import { latestSundayDtState } from 'states'

import { ArrowleftIcon, ArrowrightIcon } from 'assets/svg'
import styles from '../boxoffice.module.scss'
import BoxofficeList from './boxofficeList'

interface IProps {
  inView: boolean
}

const WeeklyBoxoffice = ({ inView }: IProps) => {
  const [dateRange, setDateRange] = useState<string | undefined>('')
  const [lastSundayDt, setLastSundayDt] = useRecoilState(latestSundayDtState)
  const data = useSearchWeeklyQuery(lastSundayDt.format('YYYYMMDD')).data?.boxOfficeResult

  const handlePre = () => {
    setLastSundayDt(lastSundayDt.subtract(7, 'day'))
  }
  const handleNext = () => {
    if (dayjs().diff(lastSundayDt, 'day') > 1) setLastSundayDt(lastSundayDt.add(7, 'day'))
  }

  useEffect(() => {
    const newDateString = `${data?.showRange.substring(2, 4)}/${data?.showRange.substring(
      4,
      6
    )}/${data?.showRange.substring(6, 9)}${data?.showRange.substring(15, 17)}`
    return setDateRange(newDateString)
  }, [data, setDateRange])

  if (!inView) return null
  return (
    <>
      <div className={styles.title}>
        <button type='button' className={styles.prevButton} onClick={handlePre} aria-label='이전 날짜'>
          <ArrowleftIcon />
        </button>
        <p>{dateRange}</p>
        <button type='button' className={styles.nextButton} onClick={handleNext} aria-label='다음 날짜'>
          <ArrowrightIcon />
        </button>
      </div>
      <BoxofficeList data={data} />
    </>
  )
}

export default WeeklyBoxoffice
