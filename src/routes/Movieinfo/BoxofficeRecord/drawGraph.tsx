import { VictoryAxis, VictoryChart, VictoryTheme, VictoryBar, VictoryLine } from 'victory'

import { useRecoilState } from 'hooks/state'
import { dailyBoxofficeStatus, statusKrToEn } from 'states/button'

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

export default DrawGraph
