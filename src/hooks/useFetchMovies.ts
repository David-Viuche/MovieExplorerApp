
import { useState, useEffect } from 'react'
import { getTopMovies } from '@/services/getTopMovies'
import { ResultTopMovies } from '@/types'

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<ResultTopMovies | undefined>(undefined)
  const [isLoading, setisLoading] = useState<boolean>(true)

  const fetchData = async () => {
    const data: ResultTopMovies | undefined = await getTopMovies()
    setMovies(data)
    setisLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    movies,
    isLoading
  }
}

