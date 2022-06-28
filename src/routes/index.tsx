import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'
import { Suspense } from 'react'

import { Loading } from 'components'
import { useSetRecoilState } from 'hooks/state'
import { bookMarkList } from 'states'
import { IBookmarkItem } from 'types'
import { getBookmark } from 'utils/localStorage'

import Gnb from './Gnb'
import Main from './Main'
import Search from 'components/Search'
import MovieDetail from './MovieDetail'
import MyBookmark from './MyBookmark'

import styles from './routes.module.scss'

const App = () => {
  const initialBookmark = useSetRecoilState<IBookmarkItem[]>(bookMarkList)

  useMount(() => {
    initialBookmark(getBookmark())
  })

  return (
    <div className={styles.appWrapper}>
      <div className={styles.innerWrapper}>
        <Gnb />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Main />} />
            {/* <Route path='searchResult' element={<Search />} /> */}
            <Route path='movieinfo' element={<MovieDetail />} />
            <Route path='mybookmark' element={<MyBookmark />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
