import { ResultSearchMovies } from '@/types';
import { API_KEY } from './const'

export const getSearchMovies = async (value: string) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${value}?limit=20`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY || '',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result: ResultSearchMovies = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
}

