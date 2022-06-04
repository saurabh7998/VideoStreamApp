import React from "react";
import './VideoItem.css';

const VideoItem = (props) => {
    return(
        <div onClick={() => props.onSelectVideo(props.videoItem)} className="video-item item">
            <img alt="video thumbnail" className="ui image" src={props.videoItem.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                     {props.videoItem.snippet.title}
                </div>
            </div>
           
        </div>
    );
}

export default VideoItem;