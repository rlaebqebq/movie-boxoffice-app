import { IMovieInfo } from 'types/movieInfo'

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
          <p key={key}>
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
