import { useRecoilValue } from 'recoil'
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryTheme, VictoryBar } from 'victory'

import { IBoxofficeGraphAPIRes } from 'types/boxofficeGraph'
import { targetMovieState } from 'states/movie'
import BoxofficeGraphStyle from './boxofficeGraphStyle'

interface Props {
  data?: IBoxofficeGraphAPIRes
}

interface IChartProps {
  xdata: string[]
  ydata: number[]
}

const DrawGraph = ({ xdata, ydata }: IChartProps) => {
  const chartData = [
    { x: xdata[0], y: ydata[0] },
    { x: xdata[1], y: ydata[1] },
    { x: xdata[2], y: ydata[2] },
  ]

  return (
    <VictoryChart theme={VictoryTheme.material} {...BoxofficeGraphStyle.chart}>
      <VictoryBar
        horizontal
        data={chartData}
        labels={({ datum }) => datum.y}
        labelComponent={
          <VictoryLabel
            style={[
              {
                fill: '#ffffff',
              },
            ]}
          />
        }
        {...BoxofficeGraphStyle.bar}
      />
      <VictoryAxis {...BoxofficeGraphStyle.axis} />
    </VictoryChart>
  )
}

const BoxofficeGraphList = ({ data }: Props) => {
  const targetMovie = useRecoilValue(targetMovieState)
  const movieCd = targetMovie.substring(10)

  if (!data) return null

  const total: number[] = []
  const label: string[] = ['관객수', '스크린수', '상영횟수', '매출']
  const filterResult = data.boxOfficeResult.weeklyBoxOfficeList.filter((item) => item.movieCd === movieCd)

  filterResult.map((item) => total.push(Number(item.audiCnt)))
  filterResult.map((item) => total.push(Number(item.scrnCnt)))
  filterResult.map((item) => total.push(Number(item.showCnt)))
  filterResult.map((item) => total.push(Number(item.salesAmt)))

  return <div>{total.length !== 0 && <DrawGraph xdata={label} ydata={total} />}</div>
}

export default BoxofficeGraphList
