import { useMemo } from 'react'

import { Dropdown } from 'components'
import { useRecoilState, useRecoilValue } from 'hooks/state'
import { dailyBoxofficeStatus, dailyBoxofficeDropdown, statusKrToEn } from 'states'
import { IWeekRecordData } from 'types'

import DrawGraph from './drawGraph'

interface Props {
  data: IWeekRecordData[]
}

const BoxofficeRecord = ({ data }: Props) => {
  const [dailyState, setDailyState] = useRecoilState(dailyBoxofficeStatus)
  const dropdownList = useRecoilValue(dailyBoxofficeDropdown)

  const xdata = Object.values(data).map((item) => item.date)

  const filterData = useMemo(() => {
    const state = statusKrToEn(dailyState)
    switch (state) {
      case 'salesAmt':
        return Object.values(data).map((item) => Number(item.data.salesAmt))

      case 'audiCnt':
        return Object.values(data).map((item) => Number(item.data.audiCnt))

      case 'scrnCnt':
        return Object.values(data).map((item) => Number(item.data.scrnCnt))

      case 'showCnt':
        return Object.values(data).map((item) => Number(item.data.showCnt))
      default:
        return Object.values(data).map((item) => Number(item.data.rank))
    }
  }, [dailyState, data])

  return (
    <>
      <Dropdown list={dropdownList} action={setDailyState} selected={dailyState} />
      <DrawGraph xdata={xdata} ydata={filterData} />
    </>
  )
}

export default BoxofficeRecord
