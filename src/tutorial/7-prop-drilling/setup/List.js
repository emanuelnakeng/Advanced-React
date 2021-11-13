import React from 'react';
import SinglePerson from './SinglePerson';

const List = ({ people, removePersonHandler }) => {
	return (
		<>
			{people.map(person => {
				return (
					<SinglePerson
						key={person.id}
						{...person}
						removePersonHandler={removePersonHandler}
					/>
				);
			})}
		</>
	);
};

export default List;
