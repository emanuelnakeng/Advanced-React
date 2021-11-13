import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(1);

	const incrementHandler = () => {
		setCounter(prevCount => {
			return prevCount + 1;
		});
	};

	const decrementHandler = () => {
		setCounter(prevCount => {
			return prevCount - 1;
		});
	};

	const reset = () => {
		setCounter(1);
	};

	const incrementLaterHandler = () => {
		setTimeout(incrementHandler, 3000);
	};

	return (
		<>
			<h1>{counter}</h1>
			<button
				disabled={counter >= 10}
				className='btn'
				onClick={incrementHandler}
			>
				+Increment
			</button>
			<button className='btn' onClick={reset}>
				Reset
			</button>
			<button
				disabled={counter <= 1}
				className='btn'
				onClick={decrementHandler}
			>
				-Decrement
			</button>
			<h1>Delayed increment</h1>
			<button className='btn' onClick={incrementLaterHandler}>
				+Increment after 3 secs
			</button>
		</>
	);
};

export default Counter;
