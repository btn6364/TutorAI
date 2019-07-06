import React from 'react';
import './Tutor.css';
const Tutor = (props)=>{
    return(
        <div className="card tutor-component" >
            <div className="card-body">
                <h5 className="card-title">{`${props.tutor.first_name} ${props.tutor.last_name} `}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.tutor.email}</h6>
                <p className="card-text">
                    Location : {props.tutor.location} <br></br>
                    Subject: {props.tutor.subject} <br></br>
                    Price: {props.tutor.price}/hour
                </p>
                
            </div>
        </div>
    )
}

export default Tutor;