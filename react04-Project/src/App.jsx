import React from 'react'
import Card from './components/Card'
// import User from './components/User'
import Contact from './components/Contact'

const App = () => {

  const jobOpenings = [
    {
      id: 1,
      logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
      companyN: "Google",
      datePosted: "2 days ago",
      position: "Software Engineer I",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$145,000",
      location: "Mountain View, CA, USA"
    },
    {
      id: 2,
      logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31566130735783.6186962073880.png",
      companyN: "Meta",
      datePosted: "5 days ago",
      position: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$155,000",
      location: "Menlo Park, CA, USA"
    },
    {
      id: 3,
      logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyN: "Amazon",
      datePosted: "1 week ago",
      position: "SDE I",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$135,000",
      location: "Seattle, WA, USA"
    },
    {
      id: 4,
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
      companyN: "Apple",
      datePosted: "3 days ago",
      position: "iOS Developer",
      tag1: "Full Time",
      tag2: "Onsite",
      salary: "$150,000",
      location: "Cupertino, CA, USA"
    },
    {
      id: 5,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmv0Z7gC3EPtQfJQWogjKvzV2WYl0IvSJWKw&s",
      companyN: "Netflix",
      datePosted: "2 weeks ago",
      position: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$180,000",
      location: "Los Gatos, CA, USA"
    },
    {
      id: 6,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AjLz2Ze01BXCesLCvOhwrlz9qHboz6XEwQ&s",
      companyN: "Microsoft",
      datePosted: "4 days ago",
      position: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$140,000",
      location: "Redmond, WA, USA"
    },
    {
      id: 7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEu8tfOJpA-vMjPqyI2gEyaDjTaI7tSJFzQ&s",
      companyN: "NVIDIA",
      datePosted: "6 days ago",
      position: "AI Engineer",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$165,000",
      location: "Santa Clara, CA, USA"
    },
    {
      id: 8,
      logo: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/openai-new-logo_f252fc.png?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
      companyN: "OpenAI",
      datePosted: "1 day ago",
      position: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$210,000",
      location: "San Francisco, CA, USA"
    },
    {
      id: 9,
      logo: "https://www.wdsoft.in/blog-images/2018/10/uber-third-logo.jpg",
      companyN: "Uber",
      datePosted: "3 weeks ago",
      position: "Data Engineer",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$145,000",
      location: "San Francisco, CA, USA"
    },
    {
      id: 10,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UyhReeGOXmK27aAEoMZh2UmDO2ohfgCacw&s",
      companyN: "Airbnb",
      datePosted: "5 days ago",
      position: "React Developer",
      tag1: "Contract",
      tag2: "Remote",
      salary: "$130,000",
      location: "San Francisco, CA, USA"
    },
    {
      id: 11,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSexjtEBBJPp7BElyuw9AT7QU18tKc6qaihg&s",
      companyN: "Adobe",
      datePosted: "1 week ago",
      position: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$142,000",
      location: "San Jose, CA, USA"
    },
    {
      id: 12,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAx4OMNKDO78w1GtSY9IKw8zy3RPjRMbWyg&s",
      companyN: "Salesforce",
      datePosted: "4 days ago",
      position: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$148,000",
      location: "San Francisco, CA, USA"
    }
  ];

  console.log(jobOpenings);


  return (
    <div>
      <header className="page-title">Job Openings</header>
      <div className='parent'>
      {jobOpenings.map(function (elem, idex) {

        console.log(idex);

        return <div key={idex}>
          <Card 
          logo={elem.logo} 
          company={elem.companyN} 
          post={elem.datePosted} 
          position={elem.position} 
          roleType={elem.tag1} 
          type={elem.tag2} 
          pay={elem.salary} 
          add={elem.location} 
          />
        </div>
          
      })}

    </div>
    <div className='enquiry'>
      <h1>Have any questions?</h1>
      <Contact />
      
      </div>

    </div>
  )
}

export default App
