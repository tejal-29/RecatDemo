import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Section2 = () => {
  return (
    <div className='h-screen w-screen bg-gray-200'>

      <div className='font-serif font-medium text-center text-6xl mt-2'>Know more about us</div>
      <div className='py-10 px-6 items-center  flex gap-10 h-[90vh] '>
        <LeftContent />
        <RightContent />

      </div>
      
      
      
       </div>

  )
}

export default Section2
