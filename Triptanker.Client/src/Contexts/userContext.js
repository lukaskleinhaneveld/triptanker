import { createContext } from "react";

const User = {
	name: "Admin",
};
const UserContext = createContext(User);

export default UserContext;
