import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { useRecoilState } from 'hooks/state'
import { useSearchDailyQuery } from 'hooks/query'
import { todayDtState } from 'states'

import { ArrowleftIcon, ArrowrightIcon } from 'assets/svg'
import styles from '../boxoffice.module.scss'
import BoxofficeList from './boxofficeList'

interface IProps {
  inView: boolean
}

const DailyBoxoffice = ({ inView }: IProps) => {
  const [dateRange, setDateRange] = useState<string | undefined>('')
  const [todayDt, settodayDt] = useRecoilState(todayDtState)
  const data = useSearchDailyQuery(todayDt.format('YYYYMMDD')).data?.boxOfficeResult

  const handlePrev = () => {
    settodayDt(todayDt.subtract(1, 'day'))
  }
  const handleNext = () => {
    if (dayjs().diff(todayDt, 'day') > 1) settodayDt(todayDt.add(1, 'day'))
  }

  useEffect(() => {
    const newDateString = `${data?.showRange.substring(2, 4)}/${data?.showRange.substring(
      4,
      6
    )}/${data?.showRange.substring(6, 8)}`
    return setDateRange(newDateString)
  }, [data, setDateRange])

  if (!inView) return null
  return (
    <>
      <div className={styles.title}>
        <button type='button' className={styles.prevButton} onClick={handlePrev} aria-label='이전 날짜'>
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

export default DailyBoxoffice
