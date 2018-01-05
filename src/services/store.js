import fetch from '../common/fetch'

export const getFoods = (params) => fetch({
	'url': '/api/food/goodinfo/getgoodinfos',
	'method': 'get',
	'params': params,
	'accredit': true
});

export const getStoreBills = (params) => fetch({
	'url': '/api/order/orderbill/storebills',
	'method': 'get',
	'params': params,
	'accredit': true
});