import styles from '../movieinfo.module.scss'

interface Props {
  data?: string
}

const InfoPlot = ({ data }: Props) => {
  return <p className={styles.plot}>{data}</p>
}

export default InfoPlot
