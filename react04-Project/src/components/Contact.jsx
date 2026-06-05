import React from 'react'

const Contact = () => {
  return (
    <div className='form'>
      <h1>Contact Us</h1>

      <div className='input'>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Subject' />
        <textarea placeholder='Message'></textarea>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact