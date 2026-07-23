import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='w-full md:max-w-6xl mx-auto'>
      {children}
    </div>
  )
}

export default Wrapper
