import React, { useState } from 'react';
import { data } from './../../../data';
import List from './List';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
	const [people, setPeople] = useState(data);

	const removePersonHandler = id => {
		const newPeople = people.filter(person => person.id !== id);
		setPeople(newPeople);
		console.log(people);
	};

	return (
		<>
			<h2>Prop Drilling</h2>
			<List people={people} removePersonHandler={removePersonHandler} />
		</>
	);
};

export default PropDrilling;
