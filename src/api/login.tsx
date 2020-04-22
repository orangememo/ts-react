import request from '@/axios/index'

/**
 * 获取权限树
 */

export function getRuleInfoTree(params: any) {
	console.log(params, 'params')
	return request({
		url: '/rule/ruleInfo/tree/accountId',
		method: 'get',
		params,
	})
}
