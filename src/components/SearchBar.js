import React from "react";

class SearchBar extends React.Component{

    state = {searchValue : ''};

    onInputChange = (e) => {
        this.setState({searchValue: e.target.value})
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchValue} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;