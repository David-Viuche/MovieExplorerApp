/* eslint-disable @next/next/no-img-element */
import { Result } from '@/types';
import DataDetail from './DataDetail';


export default function MovieCard({ movie, selectedMovieId, handleCardClick }: { movie: Result, selectedMovieId: string, handleCardClick: (id: string) => void }) {
  return (
    <div className='relative w-full rounded-xl max-w-xs shadow-md overflow-hidden h-fit hover:cursor-pointer' onClick={() => handleCardClick(movie.id)}>

      <img src={movie.primaryImage?.url || '/no_imagen.jpg'} className={`aspect-[9/16] w-full ${(selectedMovieId === movie.id) ? 'blur-[2px]' : ''}`} alt={movie.titleText.text} />
      {
        selectedMovieId === movie.id && (
          <div className='p-2 absolute bottom-0 bg-white w-full opacity-80 '>
            <DataDetail label='Title:' text={movie.titleText.text} />
            <DataDetail label='Original title:' text={movie.originalTitleText.text} />
            <DataDetail label='Caption:' text={movie.primaryImage?.caption.plainText.substring(0, 30) || ''} />
            <DataDetail label='Date:' text={`${movie.releaseDate.day}/${movie.releaseDate.month}/${movie.releaseDate.year}`} />
          </div>
        )
      }
    </div>
  )
}