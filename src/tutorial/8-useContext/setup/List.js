import React, { useContext } from 'react';
import { PersonContext } from './1-context-api';
import SinglePerson from './SinglePerson';

const List = () => {
	const { people } = useContext(PersonContext);
	return (
		<>
			{people.map(person => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</>
	);
};

export default List;
