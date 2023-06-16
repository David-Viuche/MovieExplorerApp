'use client'
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai/index.js'
import { useState, ChangeEvent, FormEvent } from 'react';

export default function SearchBar() {

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery.toLowerCase())}`);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center items-center py-20">
      <input type='text' placeholder="type to search..." className='p-2 shadow-md rounded-md border-2' onChange={handleChange} value={searchQuery} />
      <button type="submit" className='bg-slate-400 rounded-full p-2 hover:bg-slate-300 hover:scale-110'>
        <AiOutlineSearch className='w-8 h-auto text-white' />
      </button>
    </form>
  )
}