import { Toggle } from 'components'
import Search from 'components/Search'
import { useRecoil, useRecoilValue } from 'hooks/state'
import { ChangeEvent, useState } from 'react'
import { showTypeState } from 'states'
import { showResultState } from 'states/toggle'

import DailyBoxoffice from './DailyBoxoffice'
import SearchBar from './SearchBar'
import WeeklyBoxoffice from './WeeklyBoxoffice'

import styles from './main.module.scss'

const Main = () => {
  const showTypeValue = useRecoilValue(showTypeState)

  const [showResult, setShowResult] = useRecoil(showResultState)

  const handleChange = () => {
    setShowResult(true)
  }
  return (
    <div className={styles.wrapper}>
      <p>Welcome stranger!</p>
      <p>Let&apos;s relax and watch a movie!</p>
      <button className={styles.searchBar} type='button' onClick={handleChange}>
        <SearchBar />
      </button>
      {showResult ? (
        <Search />
      ) : (
        <div className={styles.pageWrapper}>
          <div className={styles.titleWrapper}>
            <h1>boxoffice</h1>
            <div className={styles.toggleWrapper}>
              <Toggle dataLeft='today' dataRight='week' />
            </div>
          </div>
          <DailyBoxoffice inView={showTypeValue === 'daily'} />
          <WeeklyBoxoffice inView={showTypeValue === 'week'} />
        </div>
      )}
    </div>
  )
}

export default Main
