import React from 'react';
import './Tutor.css';

const locations = ['Da Nang', 'Ha Noi', 'Ho Chi Minh']
const subjects = ['Math', 'English', 'Physics']
const Tutor = (props)=>{
    return(
        <div className="card tutor-component" >
            <div className="card-body">
                <h5 className="card-title">{`${props.tutor.first_name} ${props.tutor.last_name} `}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.tutor.email}</h6>
                <p className="card-text">
                    Location : {locations[props.tutor.location-1]} <br></br>
                    Subject: {subjects[props.tutor.subject-1]} <br></br>
                    Price: {props.tutor.price}/hour
                </p>

            </div>
        </div>
    )
}

export default Tutor;