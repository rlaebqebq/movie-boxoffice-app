import { Suspense } from 'react'

import LoadingPage from 'components/LoadingPage'
import styles from './main.module.scss'
import Trending from './Trending'

const Boxoffice = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className={styles.sectionWrapper}>
        <h2>Trending Now</h2>
        <Trending />
      </div>
      <div className={styles.sectionWrapper}>
        <h2>Daily Boxoffice</h2>
      </div>
    </Suspense>
  )
}

export default Boxoffice
