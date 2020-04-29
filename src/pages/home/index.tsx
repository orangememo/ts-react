import React, { Component } from 'react'
import { Button } from 'antd'
import { getRuleInfoTree } from '@/api/login'
import { Timeline, Radio } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import marked from '@/lib/marked';
// import 'braft-editor/dist/output.css'
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
		// getRuleInfoTree({ aaa: '111' }).then((res: any) => {
		// 	console.log('Iprops')
		// })
	}
	render() {
		let data = [{
			time: '2015-09-01',
			content: " ```const clickSave = () => {}   ```"
		}]
		return (
			<div>
				<Timeline>
					{data.map((item, index) => {
						return (<Timeline.Item key={index}>
							<h4>
								创建时间 {item.time}
							</h4>
							<div className="for-markdown-preview"
								dangerouslySetInnerHTML={{ __html: marked(item.content) }} />


						</Timeline.Item>)
					})}



				</Timeline>
			</div>
		)
	}
}

export default Home
