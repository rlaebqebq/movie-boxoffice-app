import { useRecoilValue } from 'hooks/state'
import { useSearchDailyQuery } from 'hooks/query'
import { targetMovieCdState } from 'states'
import { IDailyBoxOfficeList } from 'types'

const RecordItem = (date: string) => {
  const movieCd = useRecoilValue(targetMovieCdState)
  const filterData = useSearchDailyQuery(date).data?.boxOfficeResult?.dailyBoxOfficeList.filter(
    (item) => item.movieCd === movieCd
  )[0] as IDailyBoxOfficeList
  return filterData
}
export default RecordItem
