import React from 'react';

const video_list_item = ({video, onVideoSelect}) => {
//    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url; 
    return  (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img src={imageUrl} alt="thumbnail of video" className="media-object"/>
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
    
};

export default video_list_item;