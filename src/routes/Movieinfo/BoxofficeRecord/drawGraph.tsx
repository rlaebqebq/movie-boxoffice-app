import { VictoryAxis, VictoryChart, VictoryTheme, VictoryBar, VictoryScatter, VictoryLabel, VictoryLine } from 'victory'

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
    if (Number(state) > 1000 && (state === 'audiCnt' || state === 'scrnCnt' || state === 'showCnt'))
      return `${Number((datumy / 1000).toFixed(1).toString())}K`
    if (state === 'salesAmt') return `${Number((datumy / 1000000).toFixed(0).toString())}M`
    return datumy
  }

  const checkState = state === 'rank'
  const checkRankNum = xdata.length > 1

  return (
    <VictoryChart theme={VictoryTheme.material} {...RecordGraphStyle.chart}>
      {checkState && (
        <VictoryScatter
          data={chartData}
          domain={{ y: [1, 10] }}
          labels={({ datum }) => checkDailyState(datum.y)}
          labelComponent={
            <VictoryLabel
              style={[
                {
                  fill: '#ffffff',
                  fontSize: '12px',
                  letterSpacing: 'normal',
                  padding: '8px',
                },
              ]}
            />
          }
          {...RecordGraphStyle.scatter}
        />
      )}
      {checkState && checkRankNum && <VictoryLine data={chartData} {...RecordGraphStyle.line} />}
      {!checkState && (
        <VictoryBar
          data={chartData}
          labels={({ datum }) => checkDailyState(datum.y)}
          labelComponent={
            <VictoryLabel
              style={[
                {
                  fill: '#ffffff',
                  fontSize: '12px',
                  letterSpacing: 'normal',
                  padding: '8px',
                },
              ]}
            />
          }
          {...RecordGraphStyle.bar}
        />
      )}
      <VictoryAxis {...RecordGraphStyle.axisX} />
      {state === 'rank' && <VictoryAxis invertAxis dependentAxis {...RecordGraphStyle.axisY} />}
    </VictoryChart>
  )
}

export default DrawGraph
