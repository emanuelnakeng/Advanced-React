import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'Emanuel',
		age: 28,
		message: 'Some random message',
	});

	console.log(person);
	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button
				className='btn'
				onClick={() => setPerson({ ...person, name: 'Sipho' })}
			>
				Change name
			</button>
		</>
	);
};

export default UseStateObject;
