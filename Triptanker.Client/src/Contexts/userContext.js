import React, { createContext } from 'react';

const User: Object = {
	name: 'Admin',
};
const UserContext = createContext(User);

export default UserContext;
