import React, { useState } from 'react';

const Profile = () => {
	const [isSignedin, setIsSignedin] = useState(true);

	if (isSignedin === false) {
		return (
			<>
				<h1>Login now here...</h1>
			</>
		);
	}

	return (
		<>
			<h1>My account</h1>
			<h3>My account data here...</h3>
		</>
	);
};

export default Profile;
