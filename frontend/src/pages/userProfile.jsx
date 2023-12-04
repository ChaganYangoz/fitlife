import { useUserSession } from './user-context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export const UserProfile = () => {
	const { user } = useUserSession();
	const history = useHistory();

	return (
		<div className='container'>
			<div>
				<img
					src=''
					alt='pp'
				/>

				<div>
					{user.name} <br />
					{user.surname} <br />
					{user.email} <br />
					{user.password} <br />
					{user.phone} <br />
					{user.date} <br />
					{user.gender}
				</div>
			</div>
			<button
				onClick={() => {
					history.push('/userupdate');
				}}
			>
				Update
			</button>
		</div>
	);
};
