import React, { useState } from 'react';

const ErrorExample = () => {
	const [randomText, setRandomText] = useState('Random Text');
	const [showHeading, setShowHeading] = useState(true);

	const textHandler = () => {
		const random = Math.trunc(Math.random() * 3) + 1;
		if (random === 1) {
			setRandomText('Hello people');
		} else if (random === 2) {
			setRandomText('Hello boys');
		} else if (random === 3) {
			setRandomText('Bye now...');
		}
		console.log(random);
	};

	return (
		<div className='container'>
			{showHeading && <h2>Heading example</h2>}
			<h3>{randomText}</h3>
			<button className='btn' onClick={textHandler}>
				Random Text
			</button>
			<Button
				onClick={() => setShowHeading(!showHeading)}
				className={'btn'}
			>
				{showHeading ? 'Hide Text' : 'Show Text'}
			</Button>
		</div>
	);
};

const Button = ({ onClick, className, state, type, children }) => {
	return (
		<button
			onClick={onClick}
			className={className}
			disabled={state}
			type={type || 'button'}
		>
			{children}
		</button>
	);
};

export default ErrorExample;
