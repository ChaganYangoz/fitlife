import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Login = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			email: e.target[0].value,
			pass: e.target[0].value,
		};
	};

	return (
		<div className='form-content'>
			<h1>FitLife</h1>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='mail'
					placeholder='E-mail'
				/>
				<input
					type='text'
					placeholder='password'
				/>
				<button type='submit'>Log In</button>
			</form>
			<Link
				className='linkbtn'
				to='/register'
			>
				Don't have an account? Register here.
			</Link>
		</div>
	);
};
