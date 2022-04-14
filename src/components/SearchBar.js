import React from "react";

class SearchBar extends React.Component{

    state = {searchValue : ''};

    onInputChange = (e) => {
        this.setState({searchValue: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmitForm(this.state.searchValue);
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
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