import { useState, useEffect } from 'react';
import { useUserSession } from './user-context';

export const UpdateUser = () => {
	const { user } = useUserSession();

	const [name, setName] = useState(user.name);
	const [surname, setSurname] = useState(user.surname);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState(user.password);
	const [phone, setPhone] = useState(user.phone);
	const [date, setDate] = useState(user.date);
	const [gender, setGender] = useState(user.gender);

	return (
		<div className='container'>
			<div>
				<label htmlFor=''>Name:</label>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor=''>:Lastname</label>
				<input
					type='text'
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>
				<label htmlFor=''>Email:</label>
				<input
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type='text'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<input
					type='date'
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<label htmlFor='gender'>Gender :</label>

				<select id='gender'>
					<option
						value='male'
						selected={user.gender === 'Male'}
					>
						Male
					</option>
					<option
						value='female'
						selected={user.gender === 'Female'}
					>
						Female
					</option>
				</select>
			</div>
		</div>
	);
};
