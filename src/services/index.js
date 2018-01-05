import fetch from '../common/fetch'

export const getTestData = (id) => fetch('/users/whatever', 'get', {
	client_id: '',
	client_secret: ''
});

//登录
export const login = (params) => fetch({
	'url': '/api/auth/oauth2/selftoken',
	'method': 'get',
	'params': params,
	'accredit': false
});

//获取桌台
export const getTableData = (params) => fetch({
	'url': '/api/store/table/gettables',
	'method': 'get',
	'params': params,
	'accredit': true
});

//更新桌台
export const updateTableData = (params) => fetch({
	'url': '/api/store/table/updatetable',
	'method': 'post',
	'data': params,
	'accredit': true
});
