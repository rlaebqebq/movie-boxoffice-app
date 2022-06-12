import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { SpinnerIcon } from 'assets/svg'
import styles from './loadingPage.module.scss'

const LoadingPage = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const location = useLocation()

  useEffect(() => {
    setIsFetching(true)

    setTimeout(() => {
      setIsFetching(false)
    }, 3000)
  }, [location.pathname])

  if (!isFetching) return null

  return (
    <div className={styles.wrapper}>
      <SpinnerIcon />
    </div>
  )
}

export default LoadingPage
