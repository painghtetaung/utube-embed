import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
const RecPlayer = () => {
		const controls = true;
		const volume = 0;
		const width = "80%"
		const wrapper = "div"
		const playing = true;
		const height = '60vh';
		const ali = { textAlign: 'center'}
	return (
			<>
				<h1 style={ali}>Youtube Embed using react-player</h1>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>

					<ReactPlayer 
				url='https://youtu.be/P3-y0FLpXy8' 
				controls={controls}
				width = {width}
				height = {height}
				playing = {playing}
				
				/>
				</div>
				<Link to ="/react-youtube" ><div style= {{ marginLeft: '100px', marginTop: '50px' }}>Click to test => Youtube Embed using react-youtube</div></Link>
				
			</>
		)
}	

export default RecPlayer;