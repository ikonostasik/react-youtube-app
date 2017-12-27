import React from 'react';

export default (props) => (
			<div className="imgWrapper">
				 <img 
				 		id={props.id} 
				 		className={props.videoURI} 
				 		onClick={props.clickHandler} 
				 		src={props.source}  
				 />
			</div>
		 )
		