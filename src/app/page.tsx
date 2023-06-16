import { AiOutlineSearch } from 'react-icons/ai/index.js'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form action='' className="flex gap-2 justify-center items-center">

        <input type='text' placeholder="type to search..." className='p-2 shadow-md rounded-md border-2' />
        <button type="submit" className='bg-slate-400 rounded-full p-2 hover:bg-slate-300'>
          <AiOutlineSearch className='w-8 h-auto text-white' />
        </button>
      </form>
    </main>
  )
}
