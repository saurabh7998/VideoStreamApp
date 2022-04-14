import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";


class App extends React.Component {

    state = {videos: []};

    onSearchValueSubmit = async (searchValue) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchValue
            }
        });

        this.setState({videos: response.data.items})
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmitForm={this.onSearchValueSubmit}/>
                Found {this.state.videos.length} videos!
            </div>
        );
    }
    
};



export default App;