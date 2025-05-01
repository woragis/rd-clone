import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  let imageSrc = ''
  return (
    <>
      <header>
        <nav>
          <ul className='hidden flex-row md:flex w-full justify-between align-center'>
            <li className='md:block hidden'></li>
            <li>
              <Image
                src={imageSrc}
                alt=''
              />
              <Link href='/'>Valete</Link>
            </li>
            <li>
              <Link href='#'>Perfil</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}
