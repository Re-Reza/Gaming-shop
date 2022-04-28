import React, {useState} from 'react';
import { useNavigate } from 'react-router';

export function Search(){

    const [searchState, setSearchState] = useState({
        searchInput:""
    });

    const navigate = useNavigate()

    function inputChanged(event) {
        setSearchState({
            ...searchState,
            searchInput:event.target.value,
        })
    }
    //  /?q=search
    const submitSearch=(event)=>{
        event.target.reset(); //clear inputs in form
        event.preventDefault();
        navigate(`/?q=${searchState.searchInput}`);
    }

    return(
        <form onSubmit={submitSearch} className='d-flex'>
            <input onChange={inputChanged} type="search" className="form-control me-2" placeholder="search"/>    
            <button type="submit" className="btn btn-outline-success">Search</button>
        </form>
    )
}