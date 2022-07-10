import { useRecoilValue } from 'hooks/state'
import { showTypeState } from 'states'

import Toggle from 'components/Toggle'
import Search from './Search'
import DailyBoxoffice from './Boxoffice/DailyBoxoffice'
import WeeklyBoxoffice from './Boxoffice/WeeklyBoxoffice'

import styles from './main.module.scss'

const Main = () => {
  const showTypeValue = useRecoilValue(showTypeState)

  return (
    <div className={styles.wrapper}>
      <Search />
      <h2>Boxoffice Ranking 🏆</h2>
      <Toggle dataLeft='today' dataRight='week' />
      <DailyBoxoffice inView={showTypeValue === 'daily'} />
      <WeeklyBoxoffice inView={showTypeValue === 'weekly'} />
    </div>
  )
}

export default Main
