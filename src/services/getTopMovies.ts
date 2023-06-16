import { ResultTopMovies } from '@/types';
import { API_KEY } from './const'

export const getTopMovies = async () => {
  const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=20';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY || '',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result: ResultTopMovies = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
}

