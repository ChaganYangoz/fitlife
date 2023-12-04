import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { UserProfile } from './pages/userProfile';
import { UpdateUser } from './pages/updateUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPanel from './pages/AdminPanel';
import { UserSessionContext } from './pages/user-context';

function App() {
	const [user, setUser] = useState({});

	function logIn(userInfo) {
		setUser({
			id: userInfo._id,
			name: userInfo.name,
			surname: userInfo.surname,
			email: userInfo.email,
			password: userInfo.password,
			phone: userInfo.phone,
			gender: userInfo.gender,
			date: userInfo.date,
		});
	}
	return (
		<UserSessionContext.Provider value={{ user, logIn }}>
			<Router>
				<div className='App'>
					<Switch>
						<Route
							exact
							path='/login'
						>
							<Login />
						</Route>
						<Route path='/register'>
							<Register />
						</Route>
						<Route path='/user'>
							<UserProfile />
						</Route>
						<Route path='/userupdate'>
							<UpdateUser />
						</Route>
						<Route path='/admin'>
							<AdminPanel />
						</Route>
					</Switch>
				</div>
			</Router>
		</UserSessionContext.Provider>
	);
}

export default App;
