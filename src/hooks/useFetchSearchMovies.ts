
import { useState, useEffect } from 'react'
import { getSearchMovies } from '@/services/getSearchMovies'
import { ResultSearchMovies } from '@/types'

export const useFetchSearchMovies = (value: string) => {
  const [movies, setMovies] = useState<ResultSearchMovies | undefined>(undefined)
  const [isLoading, setisLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {

      if (value) {
        const data: ResultSearchMovies | undefined = await getSearchMovies(value)
        setMovies(data)
        setisLoading(false)
      }

    }

    fetchData()
  }, [value])

  return {
    movies,
    isLoading
  }
}

