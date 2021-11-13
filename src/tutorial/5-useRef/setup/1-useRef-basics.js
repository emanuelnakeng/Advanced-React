import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	const refContainer = useRef(null);
	const devContainer = useRef(null);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(devContainer.current);
	};

	useEffect(() => {
		refContainer.current.focus();
	});

	console.log('Component rendered');
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor=''>Name</label>
					<input type='text' name='my name' ref={refContainer} />
					<label htmlFor=''>Url</label>
					<input type='number' name='' id='' />
					<button type='submit'>Submit</button>
				</div>
				<div ref={devContainer}>Hello world</div>
			</form>
		</>
	);
};

export default UseRefBasics;
