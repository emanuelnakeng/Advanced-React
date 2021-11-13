import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
	const [isloading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState('default user');

	const getUser = async () => {
		try {
			const resp = await fetch(url);
			if (resp.status !== 200) {
				setIsLoading(false);
				setIsError(true);
			}
			const user = await resp.json();
			const { login } = user;
			setUser(login);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsError(true);
		}
	};

	useEffect(() => {
		getUser();
	}, [user, isloading, isError]);

	if (isloading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	}

	if (isError) {
		return (
			<div>
				<h2>Error occured...</h2>
			</div>
		);
	}

	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};

export default MultipleReturns;
