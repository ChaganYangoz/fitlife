import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Register = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			name: e.target[0].value,
			lastname: e.target[1].value,
			email: e.target[2].value,
			pass: e.target[3].value,
			phone: e.target[4].value,
			date: e.target[5].value,
			gender: e.target[6].value,
		};
	};

	return (
		<div className='form-content'>
			<h1>FitLife</h1>
			<h2>Register</h2>
			<form
				onSubmit={handleSubmit}
				action='http://localhost:5173/register'
				method='POST'
			>
				<input
					required
					type='text'
					placeholder='Name'
				/>
				<input
					required
					type='text'
					placeholder='Lastname'
				/>
				<input
					required
					type='email'
					placeholder='E-mail'
				/>
				<input
					required
					type='text'
					placeholder='Password'
				/>
				<input
					required
					type='tel'
					placeholder='Phone'
				/>
				<input
					type='date'
					required
				/>
				<div>
					<label htmlFor='gender'>Choose you gender :</label>

					<select id='gender'>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
				</div>

				<button type='submit'>Register</button>
			</form>
			<Link
				className='linkbtn'
				to='/login'
			>
				Already have an account? Login here.
			</Link>
		</div>
	);
};
