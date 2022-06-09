import { useSearchDailyQuery } from 'hooks/movieQuery'
import { useRecoilValue } from 'hooks/state'
import { targetMovieCdState } from 'states/movie'
import { IDailyBoxOfficeList } from 'types/dailyBoxoffice'

const RecordItem = (date: string) => {
  const movieCd = useRecoilValue(targetMovieCdState)
  const filterData = useSearchDailyQuery(date).data?.boxOfficeResult?.dailyBoxOfficeList.filter(
    (item) => item.movieCd === movieCd
  )[0] as IDailyBoxOfficeList
  return filterData
}
export default RecordItem
