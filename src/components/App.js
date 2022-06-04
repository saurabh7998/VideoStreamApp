import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchValueSubmit('latest news')
    }, [])

    const onSearchValueSubmit = async (searchValue) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchValue
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const onVideoSelect = (video) => {
        // console.log("From App", video);
        setSelectedVideo(video);
    }

    return (
        <div className="ui container">
            <SearchBar onSubmitForm={onSearchValueSubmit}/>

            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={selectedVideo} />
                    </div>

                    <div className="five wide column">
                        <VideoList onSelectVideo={onVideoSelect} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default App;