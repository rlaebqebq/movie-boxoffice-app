import { Dayjs } from 'dayjs'
import { useMemo } from 'react'
import { IWeekRecordData } from 'types/movie'
import RecordItem from './BoxofficeRecord/recordItem'

interface Props {
  todayDt: Dayjs
  movieOpenDt: Dayjs
  dateGap: number
}

const CalcWeek = ({ todayDt, movieOpenDt, dateGap }: Props) => {
  const ranges = []
  const weekRecord: IWeekRecordData[] = []

  let currentDate = useMemo(() => {
    if (dateGap < 7) return movieOpenDt
    return todayDt.subtract(7, 'day')
  }, [dateGap, movieOpenDt, todayDt])

  while (currentDate.isBefore(todayDt, 'day')) {
    currentDate = currentDate.add(1, 'day')
    ranges.push(currentDate.format('YYYYMMDD'))
  }
  ranges.map((item) => RecordItem(item) !== undefined && weekRecord.push({ date: item, data: RecordItem(item) }))
  return weekRecord
}
export default CalcWeek
