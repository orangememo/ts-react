import { Iroute } from '@/types/route'

export const RoutesData: Iroute[] = [
	{ path: '/home', title: '首页', icon: 'bank', component: 'Home' },
	{ path: '/addBlog', title: '新增博客', icon: 'book', component: 'addBlog', hidden: true },
	// { path: '/main/message', title: '消息', icon: 'bulb', component: 'Messsage' },
	// { path: '/main/auth', title: '权限', icon: 'bug', component: 'Auth' },
	// { path: '/main/staff', title: '员工', icon: 'audio', component: 'Staff' },
	// {
	// 	path: '/setting',
	// 	title: '设置',
	// 	icon: 'rocket',
	// 	children: [
	// 		{
	// 			path: '/setting/login',
	// 			title: '个人中心',
	// 			component: 'Login',
	// 		},
	// 		{
	// 			path: '/setting/setting/expand',
	// 			title: '功能扩展',
	// 			component: 'Expand',
	// 			children: [
	// 				{
	// 					path: '/login',
	// 					title: '个人中心',
	// 					component: 'Login',
	// 				},
	// 				{
	// 					path: '/main/setting/expand',
	// 					title: '功能扩展',
	// 					component: 'Expand',
	// 					children: [
	// 						{
	// 							path: '/login',
	// 							title: '个人中心',
	// 							component: 'Login',
	// 						},
	// 						{
	// 							path: '/main/setting/expand',
	// 							title: '功能扩展',
	// 							component: 'Test',
	// 						},
	// 					],
	// 				},
	// 			],
	// 		},
	// 	],
	// },
]
