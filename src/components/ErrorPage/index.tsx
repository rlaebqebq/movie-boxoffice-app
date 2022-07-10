import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import styles from './errorPage.module.scss'

const ErrorPage = () => {
  const navigate = useNavigate()

  navigate(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(0)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className={styles.wrapper}>
      <p>SORRY</p>
    </div>
  )
}

export default ErrorPage
