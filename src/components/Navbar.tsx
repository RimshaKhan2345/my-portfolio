import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='hover:text-yellow-600 text-3xl font-medium'>Rimsha Tariq</div>
      <ul className='hover:text-orange-400 gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li className='menuLink'><a href='#about'>about</a></li>
        <li className='menuLink'><a href='#contact'>contact</a></li>
      </ul>
</div>
    </div>
  )
}

export default Navbar
