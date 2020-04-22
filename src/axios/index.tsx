import axios from 'axios'
import { message } from 'antd'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import router from '@/router'

const service: any = axios.create({
	baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
	(config: any) => {
		console.log(config, 'config')
		// do something before request is sent
		// message.error(config)
		return config
	},
	(error: any) => {
		// do something with request error
		message.error(error)
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	(response: any) => {
		const res = response.data
		if (res.code !== 200) {
			message.error(res.message)
			return res
		} else {
			return res
		}
	},
	(error: any) => {
		return Promise.reject(error)
	}
)

export default service
