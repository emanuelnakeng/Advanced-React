import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import reducer from './Reducer';
import { data } from '../../../data';

const Index = () => {
	const [name, setName] = useState('');
	//we have a state, a dispatch function that goes thru a reducer function
	const [state, dispatch] = useReducer(reducer, {
		people: [],
		isModalOpen: false,
		modalContent: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		if (name) {
			const newItem = { id: new Date().getTime().toString(), name };
			dispatch({ type: 'ADD_ITEM', payload: newItem });
			setName('');
		} else {
			dispatch({ type: 'NO_ITEM' });
		}
	};

	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' });
	};

	return (
		<>
			{state.isModalOpen && (
				<Modal onClose={closeModal} modalContent={state.modalContent} />
			)}
			<form onSubmit={handleSubmit} className='form'>
				<div>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<button type='submit'>Add person</button>
			</form>
			{state.people.map(person => {
				return (
					<div key={person.name} className='item'>
						<h4>{person.name}</h4>
						<button
							onClick={() =>
								dispatch({
									type: 'REMOVE_PERSON',
									payload: person.id,
								})
							}
						>
							Remove
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;
