import React, { useState, useEffect } from 'react';

const ShowHide = () => {
	const [show, setShow] = useState(true);
	return (
		<>
			{show && <h1>Emanuel</h1>}
			<button className='btn' onClick={() => setShow(!show)}>
				{show ? 'Hide' : 'Show'}
			</button>
		</>
	);
};

export default ShowHide;
