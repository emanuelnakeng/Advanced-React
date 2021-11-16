import React, { useState } from 'react';
import styles from './Styling.module.css';

//inline dynamic styling
//dynamic classname

const Styling = () => {
	const [isValid, setIsValid] = useState(true);
	console.log(styles.invalid);

	return (
		<div className={`${styles.container} ${!isValid && styles.invalid}`}>
			<h1 style={{ color: isValid ? 'red' : 'blue' }}>Hello world</h1>
			<button onClick={() => setIsValid(!isValid)}>
				Dynamic styling
			</button>
			<h2 className={styles.my_text}>I am a text</h2>
		</div>
	);
};

export default Styling;
