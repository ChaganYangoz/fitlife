import Datas from './veri.json';

export const UserProfile = () => {
	return (
		<div className='container'>
			{Datas.map((data) => {
				if (data.ID == 1) {
					return (
						<div>
							<img
								src=''
								alt='pp'
							/>

							<div>
								<div>{data.Name}</div>
								<div>{data.Lastname}</div>
								<div>{data.Email}</div>
								<div>{data.Password}</div>
								<div>{data.Phone}</div>
								<div>{data.DateOfBirth}</div>
								<div>{data.Gender}</div>
							</div>
						</div>
					);
				}
			})}

			<button>Update</button>
		</div>
	);
};
