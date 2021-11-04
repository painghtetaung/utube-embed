import React from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
//using react-youtube
const Uembed = () => {

	const opts = {
     	height: '390',
      	width: '640',
     	playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      	},
    };

    const ali = { textAlign: 'center'}
    const onReadyVideo = (event) => {
    	// access to player in all event handlers via event.target
    	event.target.playVideo();
    }
	return (
		<>	
			<h1 style={ali}>Youtube Embed using react-youtube</h1>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
			<YouTube  videoId="0y_LqdsCwNc" opts={opts} onReady={onReadyVideo} />

			</div>

			<Link to ="/"><div style= {{ marginLeft: '100px', marginTop: '50px' }}>Back</div></Link>
		</>
	)
}

export default Uembed;