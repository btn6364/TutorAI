import React, {useState} from 'react';
import './Navbar.css';
import Filter from '../Filter/Filter';

const Navbar = (props) =>{
    const [filterState,filterToogle]=useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div className="horizontal">
                    <div className="navbar-brand">TutorAI</div>
                    <div onClick={()=>{
                        filterToogle(prev=>{return !prev;});
                    }}className="nav-link">Tutor filter</div>
                </div>
                {(props.loggedIn===true)?
                <button className="btn btn-outline-success my-2 my-sm-0"> Log out </button>:
                <button className="btn btn-outline-success my-2 my-sm-0"> Log in</button>
                }
            </nav>{
            (filterState===true)?
            <Filter/>:null}
        </>
        )
};
export default Navbar;