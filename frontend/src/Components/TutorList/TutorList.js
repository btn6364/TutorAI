import React from 'react';
import Tutor from '../Tutor/Tutor';
const displayTutor = (tutor)=>{
    return (
        <Tutor tutor={tutor}/>
    )
}
const TutorList= (props) =>{
    const displayAll=props.listOfTutors.map(
        tutor=>
        {
            return (displayTutor(tutor));
        }
    )
    return (
        <>
          {displayAll}
        </>)
}

export default TutorList;