import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onSelectVideo}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onSelectVideo={onSelectVideo} videoItem={video}/>
    });

    return(
        <div className="ui list">
            {renderedList}
        </div>
    );
};

export default VideoList;