import React from 'react'
import ImageBoxContent from './ImageBoxContent'

const ImageBox = (props) => {
    
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl shrink-0'>
        <img className='h-full w-full object-cover ' src={props.img} alt='person'/>
        
        <ImageBoxContent id={props.id} tag={props.tag} intro={props.intro} color={props.color}/>


      
    </div>
  )
}

export default ImageBox
