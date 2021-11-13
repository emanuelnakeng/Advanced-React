import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const useEffectBasics = () => {
	const [count, setCount] = useState(0);
	const [name, setname] = useState('Emanuel');

	useEffect(() => {
		console.log('useEffect called');
		if (count > 0) {
			document.title = `(${count}) New messages`;
		}
	}, [name, count]);

	console.log('Component rendered');
	return (
		<>
			<h1>useEffect basics</h1>
			<h2>{count}</h2>
			<button className='btn' onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</>
	);
};

export default useEffectBasics;
