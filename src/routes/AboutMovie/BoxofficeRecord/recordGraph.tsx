import { VictoryAxis, VictoryChart, VictoryTheme, VictoryBar } from 'victory'

import RecordGraphStyle from './recordGraphStyle'
import { IWeekRecordData } from 'types/movie'

interface IChartProps {
  xdata: string[]
  ydata: number[]
}

const DrawGraph = ({ xdata, ydata }: IChartProps) => {
  const dateFormat = (date: string) => {
    const newdate = `${date.substring(4, 6)}/${date.substring(6, 8)}`
    return newdate
  }

  const chartData = []
  for (let i = 0; i < xdata.length; i += 1) {
    chartData.push({ x: dateFormat(xdata[i]), y: ydata[i] })
  }

  return (
    <VictoryChart theme={VictoryTheme.material} {...RecordGraphStyle.chart}>
      <VictoryBar data={chartData} labels={({ datum }) => datum.y} {...RecordGraphStyle.bar} />
      <VictoryAxis invertAxis {...RecordGraphStyle.axis} />
    </VictoryChart>
  )
}

const RecordGraph = (props: IWeekRecordData[]) => {
  const xdata = Object.values(props).map((item) => item.date)
  const ydataRank = Object.values(props).map((item) => (item.data?.rank === undefined ? 0 : 11 - item.data.rank))

  return <DrawGraph xdata={xdata} ydata={ydataRank} />
}

export default RecordGraph
