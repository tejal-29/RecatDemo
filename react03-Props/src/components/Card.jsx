import React from 'react'

const Card = (props) => {
    // console.log(props);
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="profile" />
        <h1>{props.user}</h1>
        <h2>Age:{props.age}</h2>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button>Click Me</button>
      </div>
      
    </div>
  )
}

export default Card
