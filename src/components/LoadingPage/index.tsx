import { SpinnerIcon } from 'assets/svg'
import styles from './loadingPage.module.scss'

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <SpinnerIcon />
    </div>
  )
}

export default Loading
