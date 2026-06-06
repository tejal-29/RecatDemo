import React from 'react'
import ImageBox from './ImageBox'
import 'remixicon/fonts/remixicon.css'

const RightSide = (props) => {
  console.log(props.users);

  return (
    <div id='right' className=' h-full w-2/3 flex flex-nowrap gap-10 p-6 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem,idx){
        return <ImageBox key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
      })}


    </div>
  )
}

export default RightSide
