import { useEffect, useState } from 'react'
import { Button } from '../global/Buttons'
import Container from '../global/Container'
import Logo from './Logo'

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  const navbarStyle = showNavbar ? 'translate-y-0' : '-translate-y-full'
  return (
    <nav
      className={`h-18 bg-white transition transition-300 fixed top-0 w-full z-50 ${navbarStyle}`}
    >
      <Container display="flex justify-between items-center h-full">
        <div className="flex gap-1 md:gap-2 items-center ">
          <Logo />
          <h4 className="uppercase text-lg font-bold text-custompurple">
            just code it
          </h4>
        </div>
        <a href="#join">
          <Button text="join now" />
        </a>
      </Container>
    </nav>
  )
}
export default Navbar
