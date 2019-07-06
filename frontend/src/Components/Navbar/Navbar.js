import React, {useState} from 'react';
import './Navbar.css';
import Filter from '../Filter/Filter';
import {Link} from 'react-router-dom';

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
                <button onClick={
                    ()=>{
                        props.toogle(prev=>{return false;});
                    }
                } className="btn btn-outline-success my-2 my-sm-0"> Log out </button>:<div>

                <Link to="/signup" className="btn btn-outline-success my-2 my-sm-0"> Sign Up</Link>
                <Link to="/login" className="btn btn-outline-success my-2 my-sm-0"> Log in</Link>
    </div>
                }
            </nav>{
            (filterState===true)?
            <Filter/>:null}
        </>
        )
};
export default Navbar;