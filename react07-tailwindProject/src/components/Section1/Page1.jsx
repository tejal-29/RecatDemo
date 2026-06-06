import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Page1 = (props) => {
  return (
    <div className=' py-10 px-6 items-center flex gap-10 h-[90vh] '>
        <LeftSide />
        <RightSide users={props.users} />
      
    </div>
  )
}

export default Page1
