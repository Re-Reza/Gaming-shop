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
    const submitSearch=(event)=>{
        event.target.reset(); //clear inputs in form
        event.preventDefault();
        navigate(`/?q=${searchState.searchInput}`);
    }

    return(
        <form onSubmit={submitSearch} className='d-flex'>
            <input onChange={inputChanged} type="search" className="navBar-searchInput" placeholder="search"/>    
            <button type="submit" className="navBar-searchButton">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    )
}