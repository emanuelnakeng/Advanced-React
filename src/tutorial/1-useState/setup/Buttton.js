import React from 'react';

const Buttton = ({ children, type, onClick }) => {
	return (
		<>
			<button onClick={onClick} className='btn' type={type || 'button'}>
				{children}
			</button>
		</>
	);
};

export default Buttton;
