import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";



class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    onSearchValueSubmit = async (searchValue) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchValue
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    componentDidMount(){
        this.onSearchValueSubmit('latest news');
    }

    onVideoSelect = (video) => {
        // console.log("From App", video);
        this.setState({selectedVideo: video});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmitForm={this.onSearchValueSubmit}/>

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList onSelectVideo={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
};



export default App;