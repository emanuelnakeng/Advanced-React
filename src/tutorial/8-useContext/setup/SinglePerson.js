import React, { useContext } from 'react';
import { PersonContext } from './1-context-api';

const SinglePerson = ({ name, id }) => {
	const { removePersonHandler } = useContext(PersonContext);
	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePersonHandler(id)}>remove</button>
		</div>
	);
};

export default SinglePerson;
