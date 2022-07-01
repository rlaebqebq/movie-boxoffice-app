import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { SpinnerIcon } from 'assets/svg'
import styles from './loading.module.scss'

const Loading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    setIsFetching(true)
  }, [location.pathname])

  if (!isFetching || !isLoading) return null

  return (
    <div className={styles.wrapper}>
      <SpinnerIcon />
    </div>
  )
}

export default Loading
