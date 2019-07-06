import React, {useState} from "react";
import './Filter.css';
import FilterBox from '../FilterBox/FilterBox';
const subjects=["All Subjects","Maths","English"];
const prices=["All price","below $5/hour","below $6/hour","below $7/hour","below $8/hour"];
const locations=["All locations","Hanoi","Danang","HCM City"];
const Filter = (props)=>{
    
    let filterState=props.filterState;
    let filterSet=props.filterSet;
    const setFilter = (index,value)=>{
        filterSet( prev=>{
            return prev.map((val,idx)=>{
                if (idx===index) return value;
                else return val;
            });
        });
        
    }
    
    
    return(
        <div className='filter'>
            <FilterBox options={subjects} id="subjects" value={filterState[0]} setFilter={(val)=>{setFilter(0,val);}}/>
            <FilterBox options={prices} id="prices" value={filterState[1]} setFilter={(val)=>{setFilter(1,val);}}/>
            <FilterBox options={locations} id="locations" value={filterState[2]} setFilter={(val)=>{setFilter(2,val);}}/>
        </div>
    )
}

export default Filter;