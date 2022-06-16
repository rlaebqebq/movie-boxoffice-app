import { IMovieInfo } from 'types/movieInfo'
import styles from '../movieinfo.module.scss'

interface Props {
  data?: IMovieInfo
}

const InfoCompany = ({ data }: Props) => {
  if (!data) return null

  return (
    <>
      {data.companys.map((item, index) => {
        const key = `company-${item}-${index}`
        return (
          <p key={key} className={styles.companys}>
            {item.companyPartNm !== (undefined || null) && item.companyPartNm}
            &nbsp;:&nbsp;
            {item.companyNm !== (undefined || null) && item.companyNm}
          </p>
        )
      })}
    </>
  )
}

export default InfoCompany
