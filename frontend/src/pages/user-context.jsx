import { createContext, useContext } from 'react';

export const UserSessionContext = createContext({
	user: {},
	logIn: () => {},
	logOut: () => {},
});

export function useUserSession() {
	const { user, logIn, logOut } = useContext(UserSessionContext);
	return { user, logIn, logOut };
}
