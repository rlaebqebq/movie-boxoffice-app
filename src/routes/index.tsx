import loadable from '@loadable/component'
import { Routes, Route } from 'react-router-dom'
import { useMount } from 'react-use'

import Loading from 'components/Loading'
import { useSetRecoilState } from 'hooks/state'
import { bookMarkList } from 'states'
import { IBookmarkItem } from 'types'
import { getBookmark } from 'utils/localStorage'

import styles from './routes.module.scss'
import { lazy, Suspense } from 'react'
import Gnb from './Gnb'

const Main = lazy(() => import('./Main'))
// const Main = loadable(() => import('./Main'), { fallback: <Loading /> })
const SearchResult = loadable(() => import('./SearchResult'))
const MyBookmark = loadable(() => import('./MyBookmark'), { fallback: <Loading /> })
const MovieDetail = loadable(() => import('./MovieDetail'), { fallback: <Loading /> })

const App = () => {
  const initialBookmark = useSetRecoilState<IBookmarkItem[]>(bookMarkList)

  useMount(() => {
    initialBookmark(getBookmark())
  })

  return (
    <Suspense>
      <div className={styles.appWrapper}>
        <div className={styles.innerWrapper}>
          <Gnb />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='search' element={<SearchResult />} />
            <Route path='mybookmark' element={<MyBookmark />} />
            <Route path='movieinfo' element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  )
}

export default App
