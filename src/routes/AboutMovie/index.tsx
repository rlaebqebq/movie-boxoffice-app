import LoadingPage from 'components/LoadingPage'
import { Suspense } from 'react'
import BoxofficeRecord from 'routes/AboutMovie/BoxofficeRecord'
import MovieInfo from 'routes/AboutMovie/Movieinfo'

const AboutMovie = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BoxofficeRecord />
      <MovieInfo />
    </Suspense>
  )
}
export default AboutMovie
