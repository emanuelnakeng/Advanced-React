import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [people, setPeople] = useState([]);

	const nameHandler = e => {
		setEnteredName(e.target.value);
		console.log(enteredName);
	};

	const emailHandler = e => {
		setEnteredEmail(e.target.value);
		console.log(enteredEmail);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (enteredName && enteredName) {
			const Newperson = {
				enteredName,
				enteredEmail,
			};

			setPeople(prevPeople => {
				return [...prevPeople, Newperson];
			});
			setEnteredName('');
			setEnteredEmail('');
			console.log(people);
		}
	};

	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstname'>Name : </label>
						<input
							type='text'
							name='firstname'
							id='firstname'
							onChange={nameHandler}
							value={enteredName}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email : </label>
						<input
							type='text'
							name='email'
							id='email'
							onChange={emailHandler}
							value={enteredEmail}
						/>
					</div>
					<button type='submit'>Add person</button>
				</form>
				{people.map(person => {
					const { enteredName, enteredEmail } = person;
					return (
						<div className='item' key={Math.random()}>
							<h4>{enteredName}</h4>
							<p>{enteredEmail}</p>
						</div>
					);
				})}
			</article>
		</>
	);
};

export default ControlledInputs;
