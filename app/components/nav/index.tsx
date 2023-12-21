import React from 'react'
import Nav from './Nav'
import Languageicon from './Languageicon'
import MobileMenu from './MobileMenu'
import MobileIcons from './MobileIcons'


const Index = () => {


  return (

    <header className='relative'>
      <Nav />
      <Languageicon>
        <MobileIcons />
      </Languageicon>
      <MobileMenu />
    </header>

  )
}

export default Index