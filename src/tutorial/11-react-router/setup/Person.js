import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
	console.log(useParams());
	const { id } = useParams();
	const [name, setName] = useState('Default name');

	useEffect(() => {
		const QueryPerson = data.find(person => person.id === parseInt(id));
		setName(QueryPerson.name);
	}, []);
	return (
		<article>
			<h2>{name}</h2>
			<Link to='/people' className='btn'>
				Back to people
			</Link>
		</article>
	);
};

export default Person;

//Fetch all data of a document
