import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {

    console.log(props);
    return (


        <div className='card'>

            <div className='top'>
                <img src={props.logo} alt={props.company} />
                <button>SAVE<Bookmark size={12} color="black" /></button>
            </div>
            <div>
                <div className='center'>
                    <h3>{props.company}  <span>{props.post}</span></h3>
                    <h2>{props.position}</h2>
                    <div className='tags'>
                        <h4>{props.roleType}</h4>
                        <h4>{props.type}</h4>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.add}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>

    )
}

export default Card
