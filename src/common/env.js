let baseUrl = '';
let routerMode = '';
let webSocketUrl = 'ws://192.168.1.72:8898';
let apiUrl = window.location.origin;
let isApp = false;

if (process.env.NODE_ENV == 'development') {
	isApp = false;
} else if (process.env.NODE_ENV == 'production') {
	isApp = true;
	apiUrl = 'http://192.168.1.72:8082';
} else if (process.env.NODE_ENV == 'app') {
	isApp = true;
	apiUrl = 'http://192.168.1.72:8082';
}

export {
	baseUrl,
	routerMode,
	webSocketUrl,
	apiUrl,
	isApp
}