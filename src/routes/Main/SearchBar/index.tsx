import { useNavigate } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'

import { SearchIcon } from 'assets/svg'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const navigate = useNavigate()
  const [movieNm, setmovieNm] = useState('')

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!movieNm.trim()) {
      return
    }
    navigate(`/search?movieNm=${movieNm}`)
    setmovieNm('')
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setmovieNm(e.currentTarget.value)
  }

  return (
    <form onSubmit={submitHandler} className={styles.searchBar}>
      <input
        type='text'
        value={movieNm}
        onChange={changeHandler}
        autoComplete='off'
        autoCapitalize='off'
        placeholder='Search'
      />
      <button type='submit'>
        <SearchIcon type='button' />
      </button>
    </form>
  )
}

export default SearchBar
