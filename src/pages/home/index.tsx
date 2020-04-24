import React, { Component } from 'react'
import { Button } from 'antd'
import { getRuleInfoTree } from '@/api/login'
interface Iprops {
	history: any
}
class Home extends Component<Iprops, any> {

	public state = {
		count: 0,
	}
	public plusCount = () => {
		// this.setState({
		// 	count: ++this.state.count,
		// })
	}
	componentDidMount() {
		getRuleInfoTree({ aaa: '111' }).then((res: any) => {
			console.log('Iprops')
		})
	}
	render() {
		return (
			<div>
				<h1>我是主页</h1>
				<Button type="primary" onClick={() => this.props.history.push('/login')}>
					跳转到登录页
				</Button>
			</div>
		)
	}
}

export default Home
