import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users =[
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'You can quickly access RemixIcon through the plugin in Figma, just as convenient as using the official website.',
      tag: 'Satisfied',
      color: 'skyblue'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1670884442927-e647436e12ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Working professionals make excellent entrepreneurs because they already possess marketable skills, industry networks. ',
      tag: 'Entrepreneurs',
      color: 'yellow'
    },
    {
      img: 'https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'India workforce is increasingly entrepreneurial. Salaried employees and self-employed individuals alike are recognising',
      tag: 'Workforce',
      color: 'pink'

    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1686244745026-98fc15ad3400?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'India workforce is increasingly entrepreneurial. Salaried employees and self-employed individuals alike are recognising',
      tag: 'Team',
      color: 'orange'

    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1732098510740-107d324ce4c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'India workforce is increasingly entrepreneurial. Salaried employees and self-employed individuals alike are recognising',
      tag: 'Engineer',
      color: 'red'

    }

  ]
  return (
    <div className='h-full w-full bg-gray-200'>
      <Section1 users={users}/>
      <Section2 />
      
    </div>
  )
}

export default App
