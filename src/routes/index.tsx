import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'
import { lazy, Suspense } from 'react'

import { useSetRecoilState } from 'hooks/state'
import { bookMarkList } from 'states'
import { IBookmarkItem } from 'types'
import { getBookmark } from 'utils/localStorage'

import styles from './routes.module.scss'
import Loading from 'components/Loading'

const Gnb = lazy(() => import('./Gnb'))
const Main = lazy(() => import('./Main'))
const SearchResult = lazy(() => import('./SearchResult'))
const MyBookmark = lazy(() => import('./MyBookmark'))
const MovieDetail = lazy(() => import('./MovieDetail'))

const App = () => {
  const initialBookmark = useSetRecoilState<IBookmarkItem[]>(bookMarkList)

  useMount(() => {
    initialBookmark(getBookmark())
  })

  return (
    <div className={styles.appWrapper}>
      <div className={styles.innerWrapper}>
        <Suspense fallback={<Loading />}>
          <Gnb />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='search' element={<SearchResult />} />
            <Route path='mybookmark' element={<MyBookmark />} />
            <Route path='movieinfo' element={<MovieDetail />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
