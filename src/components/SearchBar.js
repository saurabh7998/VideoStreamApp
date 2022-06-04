import React, { useState } from "react";


const SearchBar = ({onSubmitForm}) => {
    const [searchValue, setSearchValue] = useState('')

  
    onFormSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(searchValue);
    }

   
    return(
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
                </div>
            </form>
        </div>
    );

    
}


export default SearchBar;