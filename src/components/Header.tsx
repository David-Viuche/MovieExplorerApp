'use client'
import { useState } from 'react'
import { HeaderLink } from './HeaderLink'
import { AiOutlineCloseSquare, AiOutlineGithub } from 'react-icons/ai/index.js'
import { TfiMenuAlt } from 'react-icons/tfi/index.js'

export const Header = () => {
  const [isOpen, setisOpen] = useState(false)

  function handleOnclick() {
    setisOpen(open => !open)
  }

  return (
    <header className='bg-cyan-700 text-lg text-white flex flex-col w-full h-auto sm:flex-row sm:justify-around sm:h-auto'>
      <div className='flex justify-between items-center p-3'>
        <h2 className='sm:-m-0'>
          Movies Explorer
        </h2>
        <div onClick={handleOnclick} className='sm:hidden'>

          {
            (isOpen)
              ? <AiOutlineCloseSquare className='w-8 h-8' />
              : <TfiMenuAlt className='w-8 h-8' />
          }

        </div>

      </div>
      <nav className={`bg-cyan-700 absolute p-5 top-14 inset-x-0 transition transform origin-top-right ${(!isOpen) && 'hidden'} sm:block opacity-95 sm:relative sm:top-0`}>
        <ul className='flex flex-col justify-center items-center gap-5 text-center w-full sm:flex-row sm:h-14'>
          <HeaderLink href='/' ariaLabel='redirección a la página principal'>Inicio</HeaderLink>
          <HeaderLink href='/movies' ariaLabel='redirección a la página para concocer más'>Acerca de</HeaderLink>
          <HeaderLink href='https://github.com/david-viuche' target='_blank' ariaLabel='redirección al perfil de github'><AiOutlineGithub className='h-8 w-8' /></HeaderLink>
        </ul>
      </nav>
    </header>
  )
}
