import React from 'react'


const App = () => {
  // function btnClicked(){
  //   console.log('button is clicked');
  // }
  // function mouseEnter(){
  //   console.log('Mouse Entered')
  // }
  function inputChanging(){
    console.log('User is typing..')
  }
  return (
    <div className='check'>
      <h1>Tejal</h1>

      {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}>Press It</button>
      <button onDoubleClick={btnClicked}>Explore more</button> */}

     <button onClick={function(){
      console.log('Hello guys....')
     }}>Click it</button>


     {/* <input onClick={function(){
      console.log('on input..')
     }} type="text" placeholder='Enter Your Name'/> */}
     
     <input onChange={inputChanging} type="text" placeholder='Enter Your Name'/>
    </div>

    

  )
}

export default App
