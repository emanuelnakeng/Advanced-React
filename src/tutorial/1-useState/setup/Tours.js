import React, { useState } from 'react';
import { data2 } from '../../../data';

const Tours = () => {
	const [tours, setTours] = useState(data2);

	const removeItem = id => {
		setTours(tours.filter(tour => tour.id !== id));
	};

	return (
		<>
			<h2>Tours array</h2>
			{tours.map(tour => {
				console.log(tour);
				const { id, region, stops, title } = tour;
				return (
					<div key={id} className='item'>
						<h3>{title}</h3>
						<span>{stops} Stops</span>
						<span>{region}</span>
						<button className='btn' onClick={() => removeItem(id)}>
							Remove
						</button>
					</div>
				);
			})}
			<button className='btn' onClick={() => setTours([])}>
				Remove all
			</button>
		</>
	);
};

export default Tours;
