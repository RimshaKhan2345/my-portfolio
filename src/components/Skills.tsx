import React from 'react'

function Skills() {
  return (
    <div id='skills'className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
<div>
        <h2 className='text-orange-600 text-4xl md:text-5xl'>Skills</h2>
        <p className='text-yellow-600 font-medium pt-3'>
        I am a GIAIC student & i expert in different types of coding languages or some foreign languages <br />
        and we highlight your most relevant skills and achievements, and focus on the results you've delivered.
        </p>
      </div>
      <div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'></div>
        <div className='grid grid-cols-3 text-3xl mb-2 space-y-2'>
          <h2 className='hover:text-yellow-600'>Typescript</h2>
          <h2 className='hover:text-yellow-600'>HTML</h2>
          <h2 className='hover:text-yellow-600'>CSS</h2>
        </div>
        <div className='grid grid-cols-3 text-3xl mb-2 space-y-2'>
          <h2 className='hover:text-yellow-600'>React.js</h2>
          <h2 className='hover:text-yellow-600'>Next.js</h2>
          <h2 className='hover:text-yellow-600'>Tailwind CSS</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills
