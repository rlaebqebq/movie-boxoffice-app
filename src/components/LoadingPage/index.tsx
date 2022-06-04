import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './loadingPage.module.scss'
import { SpinnerIcon } from 'assets/svg'

const LoadingPage = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const location = useLocation()

  useEffect(() => {
    setIsFetching(true)

    setTimeout(() => {
      setIsFetching(false)
    }, 2000)
  }, [location.pathname])

  if (!isFetching) return null

  return (
    <div className={styles.wrapper}>
      <SpinnerIcon />
    </div>
  )
}

export default LoadingPage
