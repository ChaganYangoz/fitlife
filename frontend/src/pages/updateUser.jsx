import { useState, useEffect } from 'react';
import Datas from './veri.json';

export const UpdateUser = () => {
	return (
		<div className='container'>
			{Datas.map((data) => {
				if (data.ID == 1) {
					return (
						<div>
							<label htmlFor=''>Name:</label>
							<input
								type='text'
								value={data.Name}
							/>
							<label htmlFor=''>:Lastname</label>
							<input
								type='text'
								value={data.Lastname}
							/>
							<label htmlFor=''>Email:</label>
							<input
								type='text'
								value={data.Email}
							/>
							<input
								type='text'
								value={data.Password}
							/>
							<input
								type='text'
								value={data.Phone}
							/>
							<input
								type='text'
								value={data.DateOfBirth}
							/>
							<label htmlFor='gender'>Gender :</label>

							<select id='gender'>
								<option
									value='male'
									selected={data.Gender === 'Male'}
								>
									Male
								</option>
								<option
									value='female'
									selected={data.Gender === 'Female'}
								>
									Female
								</option>
							</select>
						</div>
					);
				}
			})}
		</div>
	);
};
