import Home from '../Home/home';
import Profile from '../Profile/profile';

const SidebarMenuItems = [
	{
		path: '/',
		title: 'Home',
		component: <Home />,
		icon: 'home',
		active: true,
	},
	{
		path: '/profile',
		title: 'Profile',
		component: <Profile />,
		icon: 'user',
		active: false,
	},
];

export default SidebarMenuItems;
