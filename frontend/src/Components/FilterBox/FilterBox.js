import React from 'react';
import './FilterBox.css';

const FilterBox = (props)=>{
    
    const closeDropdown = () =>{
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    const listOfOptions = (options)=>{
        return(
            options.map((option,idx)=>{
                return(
                    <ul id={idx} onClick={()=>{closeDropdown();props.setFilter(option);}}>{option}</ul>                
                )
            })
        )
    }
    return (
        <div>
            <button onClick={
                ()=>{
                    const dropdown=(document.getElementById(props.id).classList.contains("show")===true);
                    closeDropdown();
                    if (!dropdown)
                    document.getElementById(props.id).classList.toggle("show");   
            
                }
            } className="dropbtn">{props.value}</button>
                <li  id={props.id} className="dropdown-content">
                    {listOfOptions(props.options)}
                </li>
            </div>
    )
};
export default FilterBox;