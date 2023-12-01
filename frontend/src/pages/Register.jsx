import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Register = () => {
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			name: e.target[0].value,
			surname: e.target[1].value,
			email: e.target[2].value,
			password: e.target[3].value,
			phone: e.target[4].value,
			date: e.target[5].value,
			gender: e.target[6].value,
		};
		try {
			const response = await fetch(
				'http://localhost:3000/users/register',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(user),
				}
			);

			if (response.ok) {
				const data = await response.json();
				console.log('User Created:', data);
				history.push('/login');
				// Başarılı bir şekilde kullanıcı oluşturulduğunda yapılacak işlemler burada yapılabilir
			} else {
				console.error('User Creation failed');
			}
		} catch (error) {
			console.error('Error:', error);
		}
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
