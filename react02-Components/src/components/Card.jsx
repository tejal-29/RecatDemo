import React from 'react'

const Card = () => {
    const user = "Tejal"
    const age = 22
  return (
    <div>
      <div className="card">
        <h1>Helllllllo my name is {user}</h1>
        <h2>I am {age} years old</h2>
        {/* we used brackets to print the value of variable  */}    
      </div>
    </div>
  )
}

export default Card



// function Card() {
//     const user = "Tejal"
//     const age = 22
//     return <div className="card">
//             <h1>Helo my name is {user}</h1>
//             <h2>I am {age} years old</h2>
//             {/* we used brackets to print the value of variable  */}
//     </div>
// }
// export default Card;


