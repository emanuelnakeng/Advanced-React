import React from 'react';

const SinglePerson = ({ name, id, removePersonHandler }) => {
	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePersonHandler(id)}>remove</button>
		</div>
	);
};

export default SinglePerson;
