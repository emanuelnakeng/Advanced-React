import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';

	return (
		<>
			{/* <h1>{firstValue}</h1>
			<h1>{secondValue}</h1> */}
			{text || <h2>Emanuel Nakeng</h2>}
			{text && <h2>Mashao Nakeng</h2>}
			{isError && <h2>Error happened....</h2>}
			<button className='btn' onClick={() => setIsError(!isError)}>
				Toggle error
			</button>
			{isError ? <h2>Error happened....</h2> : <h2>No error</h2>}
		</>
	);
};

export default ShortCircuit;
