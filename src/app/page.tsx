'use client'
import { useState } from 'react'
import { Result } from '@/types'
import MovieCard from '@/components/MovieCard'
import { useFetchMovies } from '@/hooks/useFetchMovies'
import Loader from '@/components/Loader'

export default function Home() {

  const [selectedMovieId, setSelectedMovieId] = useState<string>('');

  const { isLoading, movies } = useFetchMovies()

  const handleCardClick = (id: string) => {
    setSelectedMovieId(currentId => {
      if (currentId && (currentId === id)) {
        return ''
      }

      return id
    });
  };

  return (
    <main className='flex min-h-screen flex-col items-center px-24 pb-24 gap-6'>

      <h1 className='text-lg'>Upcoming movies</h1>
      <section className='grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-4xl'>
        {
          isLoading && <Loader />
        }
        {
          movies?.results.map((movie: Result) => (
            <MovieCard key={movie.id} movie={movie} selectedMovieId={selectedMovieId} handleCardClick={handleCardClick} />
          ))
        }
      </section>
    </main>
  )
}
