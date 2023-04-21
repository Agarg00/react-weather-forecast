import React from 'react';

const Scroll = (props) =>{
	return(
		<div className="mt2" style={{overflowY:'auto',border:'1px solid black',borderRadius:'4px', height:'400px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;