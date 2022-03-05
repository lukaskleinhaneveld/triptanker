import Home from '../Home/Home';
import Profile from '../Profile/Profile';

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
