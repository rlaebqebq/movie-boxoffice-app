import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { useRecoilState } from 'hooks/state'
import { useSearchDailyQuery, useSearchWeeklyQuery } from 'hooks/query'
import { latestSundayDtState, todayDtState } from 'states'

import { ArrowleftIcon, ArrowrightIcon } from 'assets/svg'
import styles from './boxoffice.module.scss'
import BoxofficeList from './boxofficeList'

interface IProps {
  inView: string
}

const DailyBoxoffice = ({ inView }: IProps) => {
  const [dateRange, setDateRange] = useState<string | undefined>('')
  const [todayDt, settodayDt] = useRecoilState(todayDtState)
  const dailyData = useSearchDailyQuery(todayDt.format('YYYYMMDD')).data?.boxOfficeResult

  const [lastSundayDt, setLastSundayDt] = useRecoilState(latestSundayDtState)
  const weeklyData = useSearchWeeklyQuery(lastSundayDt.format('YYYYMMDD')).data?.boxOfficeResult

  const handlePrev = () => {
    if (inView === 'daily') settodayDt(todayDt.subtract(1, 'day'))
    if (inView === 'weekly') setLastSundayDt(lastSundayDt.subtract(7, 'day'))
  }
  const handleNext = () => {
    if (inView === 'daily' && dayjs().diff(todayDt, 'day') > 1) settodayDt(todayDt.add(1, 'day'))
    if (inView === 'weekly' && dayjs().diff(lastSundayDt, 'day') > 1) setLastSundayDt(lastSundayDt.add(7, 'day'))
  }

  useEffect(() => {
    let newDateString = ''
    if (inView === 'daily')
      newDateString = `${dailyData?.showRange.substring(2, 4)}/${dailyData?.showRange.substring(
        4,
        6
      )}/${dailyData?.showRange.substring(6, 8)}`
    if (inView === 'weekly')
      newDateString = `${weeklyData?.showRange.substring(2, 4)}/${weeklyData?.showRange.substring(
        4,
        6
      )}/${weeklyData?.showRange.substring(6, 9)}${weeklyData?.showRange.substring(
        13,
        15
      )}/${weeklyData?.showRange.substring(15, 17)}`
    return setDateRange(newDateString)
  }, [dailyData, inView, setDateRange, weeklyData?.showRange])

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
      {inView === 'daily' && <BoxofficeList data={dailyData} inView={inView} />}
      {inView === 'weekly' && <BoxofficeList data={weeklyData} inView={inView} />}
    </>
  )
}

export default DailyBoxoffice
