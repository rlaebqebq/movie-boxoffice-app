import { VictoryAxis, VictoryChart, VictoryTheme, VictoryBar, VictoryLine } from 'victory'
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
  const state = statusKrToEn(dailyState)

  const dateFormat = (date: string) => {
    const newdate = `${date.substring(4, 6)}/${date.substring(6, 8)}`
    return newdate
  }

  const chartData = []
  for (let i = 0; i < xdata.length; i += 1) {
    chartData.push({ x: dateFormat(xdata[i]), y: ydata[i] })
  }

  const checkDailyState = (datumy: number) => {
    if (state === 'audiCnt' || state === 'scrnCnt' || state === 'showCnt')
      return `${Number((datumy / 1000).toFixed(1).toString())}K`
    if (state === 'salesAmt') return `${Number((datumy / 1000000).toFixed(0).toString())}M`
    return datumy
  }

  return (
    <VictoryChart theme={VictoryTheme.material} {...RecordGraphStyle.chart}>
      {state === 'rank' ? (
        <VictoryLine data={chartData} labels={({ datum }) => checkDailyState(datum.y)} {...RecordGraphStyle.line} />
      ) : (
        <VictoryBar data={chartData} labels={({ datum }) => checkDailyState(datum.y)} {...RecordGraphStyle.bar} />
      )}
      <VictoryAxis {...RecordGraphStyle.axisX} />
      {state === 'rank' && <VictoryAxis invertAxis dependentAxis {...RecordGraphStyle.axisY} />}
    </VictoryChart>
  )
}

const RecordGraph = (props: IWeekRecordData[]) => {
  const [dailyState, setDailyState] = useRecoilState(dailyBoxofficeStatus)
  const adList = useRecoilValue(dailyBoxofficeDropdown)

  const xdata = Object.values(props).map((item) => item.date)

  const filterData = useMemo(() => {
    const state = statusKrToEn(dailyState)
    switch (state) {
      case 'salesAmt':
        return Object.values(props).map((item) => (item.data?.salesAmt === undefined ? 0 : Number(item.data.salesAmt)))

      case 'audiCnt':
        return Object.values(props).map((item) => (item.data?.audiCnt === undefined ? 0 : Number(item.data.audiCnt)))

      case 'scrnCnt':
        return Object.values(props).map((item) => (item.data?.scrnCnt === undefined ? 0 : Number(item.data.scrnCnt)))

      case 'showCnt':
        return Object.values(props).map((item) => (item.data?.showCnt === undefined ? 0 : Number(item.data.showCnt)))
      default:
        return Object.values(props).map((item) => (item.data?.rank === undefined ? 0 : Number(item.data.rank)))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dailyState])

  return (
    <>
      <Dropdown list={adList} action={setDailyState} selected={dailyState} />
      <DrawGraph xdata={xdata} ydata={filterData} />
    </>
  )
}

export default RecordGraph
