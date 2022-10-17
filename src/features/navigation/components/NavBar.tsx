import React from 'react'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import ScrollMenu from './ScrollMenu'

const NavBar = () => {
  return (
    <>
      <header className={` overflow-hidden !w-screen z-[1000] md:max-w-[98vw]`}>
        <a
          href='#content'
          className='h-[0] w-[0] text-[0rem] absolute top-0 translate-y-full'
        >
          Skip to content
        </a>
        <DesktopMenu />

        <MobileMenu />
      </header>
      <ScrollMenu />
    </>
  )
}

export default NavBar
