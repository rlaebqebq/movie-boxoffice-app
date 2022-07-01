import { IMovieInfo } from 'types'

interface Props {
  data?: IMovieInfo
}

const InfoTitle = ({ data }: Props) => {
  if (!data) return null

  const dataActor = () => {
    const result = []
    const actorLength = data.actors.length > 5 ? 5 : data.actors.length
    for (let i = 0; i < actorLength; i += 1) {
      result.push(<span key={`actorsNm-${i}`}>&nbsp;{data.actors[i].peopleNm}</span>)
    }
    return <p>출현&nbsp;:{result}</p>
  }

  return (
    <>
      <h2>{data.movieNm !== undefined && data.movieNm}</h2>
      <h3>{data.movieNmEn !== undefined && data.movieNmEn}</h3>
      {data.directors.map((item, index) => {
        const key = `directors-${item}-${index}`
        return <p key={key}>감독&nbsp;:&nbsp;{item.peopleNm !== (undefined || null) && item.peopleNm}</p>
      })}
      {data.actors.length > 0 && dataActor()}
      <p>
        {data.openDt !== (undefined || null) &&
          `${data.prdtStatNm} : ${data.openDt.substring(0, 4)}-${data.openDt.substring(4, 6)}-${data.openDt.substring(
            6,
            8
          )}`}
      </p>
    </>
  )
}

export default InfoTitle
