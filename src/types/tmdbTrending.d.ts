interface Result {
  adult?: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  overview: string
  poster_path: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average: number
  vote_count: number
  popularity: number
  first_air_date?: string
  name?: string
  origin_country?: string[]
  original_name?: string
}

export interface ITmdbTrendingAPIRes {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}
