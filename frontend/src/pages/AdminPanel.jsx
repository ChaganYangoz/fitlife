import { useState } from 'react';
import Datas from './veri.json';

const AdminPanel = () => {
	const [selectedId, setSelectedID] = useState('');

	return (
		<div className='userContainer'>
			{Datas.map((data) => {
				return (
					<div
						data-key={data.ID}
						className='userCard'
						key={data.ID}
						onClick={() => setSelectedID(data.ID)}
					>
						<img
							src=''
							alt='pp'
						/>
						<div>{data.Name}</div>
						<div>{data.Lastname}</div>
						<button>Update</button>
						<button>Disable Account</button>
					</div>
				);
			})}
		</div>
	);
};

export default AdminPanel;
