import React, { useState, useContext } from 'react';
import { data } from './../../../data';
import List from './List';

// more components
// fix - context api, redux (for more complex cases)
export const PersonContext = React.createContext();

//Provider, Consumer

const ContextAPI = () => {
	const [people, setPeople] = useState(data);

	const removePersonHandler = id => {
		const newPeople = people.filter(person => person.id !== id);
		setPeople(newPeople);
		console.log(people);
	};

	return (
		<PersonContext.Provider value={{ removePersonHandler, people }}>
			<h2>Context API</h2>
			<List />
		</PersonContext.Provider>
	);
};

export default ContextAPI;
