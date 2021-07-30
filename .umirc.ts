import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
	treeShaking: true,
	routes: [
		{
			path: '/',
			component: '../layouts/index',// index
			routes: [
				{ path: '/', component: '../pages/index' },
				{ path: '/hello', component: '../pages/hello' },
				{ path: '/users', component: '../pages/users' },
				{ path: '/learning', component: '../pages/learning' },
				{ path: '/500', component: './500', name: 500 },
				{ path: '/404', component: './404' },
				{ path: '/puzzlecards', component: '../pages/puzzlecards' },
				{ path: '/list', component: '../pages/list' },
				{
					path: '/dashboard',
					component: '../layouts/learning',// index
					routes: [
						{ path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
						{ path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
						{ path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
					]
				}
			]
		},
	],
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
			dva: {
				dynamicImport: true, //是否启用按需加载
				hmr: true //是否启用 dva 的 热更新
			},
			dynamicImport: false,
			title: 'web',
			dll: false,
			routes: {
				exclude: [
					/components\//,
				],
			},
		}],
	],
	proxy: {
		'/dev': {
			target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
			changeOrigin: true,
		},
	},
	// base: '/docs/',
	// publicPath: '/docs/',
	outputPath: '/docs/'
}

export default config;
