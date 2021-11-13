import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
	console.log(size);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log('useEffect called');
		window.addEventListener('resize', checkSize);
		return () => {
			console.log('Cleanup here');
			window.removeEventListener('resize', checkSize);
		};
	}, [size]);

	console.log('Component rendered');
	return (
		<>
			<h2>window</h2>
			<h3>{size} PX</h3>
		</>
	);
};

export default UseEffectCleanup;
