import { VictoryAxis, VictoryChart, VictoryTheme, VictoryBar } from 'victory'
import { useMemo } from 'react'

import Dropdown from 'components/Dropdown'
import { useRecoilState, useRecoilValue } from 'hooks/state'
import { dailyBoxofficeDropdown, dailyBoxofficeStatus, statusKrToEn } from 'states/button'
import { IWeekRecordData } from 'types/movie'

import RecordGraphStyle from './recordGraphStyle'

interface IChartProps {
  xdata: string[]
  ydata: number[]
}

const DrawGraph = ({ xdata, ydata }: IChartProps) => {
  const [dailyState] = useRecoilState(dailyBoxofficeStatus)

  const dateFormat = (date: string) => {
    const newdate = `${date.substring(4, 6)}/${date.substring(6, 8)}`
    return newdate
  }

  const chartData = []
  for (let i = 0; i < xdata.length; i += 1) {
    chartData.push({ x: dateFormat(xdata[i]), y: ydata[i] })
  }

  const checkDailyState = () => {
    const state = statusKrToEn(dailyState)
    if (state === 'audiCnt' || state === 'scrnCnt' || state === 'showCnt') return true
    return false
  }

  return (
    <VictoryChart theme={VictoryTheme.material} {...RecordGraphStyle.chart}>
      <VictoryBar
        data={chartData}
        labels={
          checkDailyState()
            ? ({ datum }) => `${Number((datum.y / 1000).toFixed(1).toString())}K`
            : ({ datum }) => datum.y
        }
        // labels={({ datum }) => datum.y}
        {...RecordGraphStyle.bar}
      />

      <VictoryAxis invertAxis {...RecordGraphStyle.axis} />
    </VictoryChart>
  )
}

const RecordGraph = (props: IWeekRecordData[]) => {
  const [dailyState, setDailyState] = useRecoilState(dailyBoxofficeStatus)
  const adList = useRecoilValue(dailyBoxofficeDropdown)

  const xdata = Object.values(props).map((item) => item.date)

  const ydataRank = Object.values(props).map((item) => (item.data?.rank === undefined ? 0 : 11 - item.data.rank))

  const filterData = useMemo(() => {
    const state = statusKrToEn(dailyState)
    if (state === 'rank') {
      return Object.values(props).map((item) => (item.data?.rank === undefined ? 0 : 11 - item.data.rank))
    }
    if (state === 'salesAmt') {
      return Object.values(props).map((item) => (item.data?.salesAmt === undefined ? 0 : Number(item.data.salesAmt)))
    }
    if (state === 'audiCnt') {
      return Object.values(props).map((item) => (item.data?.salesAmt === undefined ? 0 : Number(item.data.audiCnt)))
    }
    if (state === 'scrnCnt') {
      return Object.values(props).map((item) => (item.data?.salesAmt === undefined ? 0 : Number(item.data.scrnCnt)))
    }
    return Object.values(props).map((item) => (item.data?.audiCnt === undefined ? 0 : Number(item.data.showCnt)))
  }, [dailyState])

  return (
    <>
      <Dropdown list={adList} action={setDailyState} selected={dailyState} />
      <DrawGraph xdata={xdata} ydata={filterData} />
    </>
  )
}

export default RecordGraph
