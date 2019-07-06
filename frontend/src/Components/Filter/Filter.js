import React from "react";
import './Filter.css';
import FilterBox from '../FilterBox/FilterBox';
const subjects=["All Subjects","Maths","English"];  
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
    const handleChangeMax = (e)=>{
        setFilter(2,e.target.value);
        
    }
    const handleChangeMin = (e)=>{
        setFilter(1,e.target.value);
    }
    
    return(
        <div className='filter'>
            <FilterBox options={subjects} id="subjects" value={filterState[0]} setFilter={(val)=>{setFilter(0,val);}}/>            
            <FilterBox options={locations} id="locations" value={filterState[3]} setFilter={(val)=>{setFilter(2,val);}}/>
            <div>
            <label>Price range :</label>
            From
            <span><input onChange={handleChangeMin} type="text" ></input></span> to <span><input onChange={handleChangeMax} type="text" ></input></span>
            </div>
        </div>
    )
}

export default Filter;