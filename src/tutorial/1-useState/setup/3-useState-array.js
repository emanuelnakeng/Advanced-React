import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [people, setpeople] = useState(data);

	const removePersonHandler = id => {
		let newPeople = people.filter(item => item.id !== id);
		setpeople(newPeople);
	};

	return (
		<>
			{people.map(person => {
				console.log(person);
				const { id, name } = person;
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button
							className='btn'
							onClick={() => removePersonHandler(id)}
						>
							delete
						</button>
					</div>
				);
			})}
			<button
				className='btn'
				onClick={() => {
					setpeople([]);
				}}
			>
				Delete items
			</button>
		</>
	);
};

export default UseStateArray;
