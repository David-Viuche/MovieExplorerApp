import Link from 'next/link'

interface Props {
  href: string
  target?: string
  ariaLabel: string
  children: React.ReactNode
}

export const HeaderLink = ({ children, href, target, ariaLabel }: Props) => {
  return (
    <li className='p-2 w-6/12 rounded opacity-1 bg-cyan-600 hover:bg-cyan-500 sm:hover:bg-cyan-700 sm:bg-cyan-700 sm:hover:border-b-2 sm:w-auto flex justify-center'>
      <Link href={href} target={target} aria-label={ariaLabel} className='w-full h-full flex justify-center'>
        {children}
      </Link>
    </li>
  )
}
