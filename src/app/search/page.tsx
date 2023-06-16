'use client'
import Loader from '@/components/Loader';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { useFetchSearchMovies } from '@/hooks/useFetchSearchMovies';
import { Result } from '@/types';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Search() {

  const [queryValue, setqueryValue] = useState<string>('');

  const { isLoading, movies } = useFetchSearchMovies(queryValue)

  const [selectedMovieId, setSelectedMovieId] = useState<string>('');

  const searchParams = useSearchParams();

  const router = useRouter()

  const handleCardClick = (id: string) => {
    setSelectedMovieId(currentId => {
      if (currentId && (currentId === id)) {
        return ''
      }

      return id
    });
  };

  useEffect(() => {
    const q = searchParams.get('q')

    if (!q) return router.push('/')

    setqueryValue(q)

  }, [queryValue, router, searchParams]);

  return (
    <main className='flex min-h-screen flex-col items-center px-24 pb-24 gap-6'>

      <h1 className='text-lg'>Search results</h1>
      <section className='grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-4xl'>
        {
          isLoading && <Loader />
        }
        {
          movies && movies?.results?.length === 0 && 'No results found :c'
        }
        {
          movies && movies?.results?.map((movie: Result) => (
            <MovieCard key={movie.id} movie={movie} selectedMovieId={selectedMovieId} handleCardClick={handleCardClick} />
          ))
        }
      </section>
    </main>
  );
}
