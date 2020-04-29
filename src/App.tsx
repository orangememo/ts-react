import React from 'react'
//eslint disable next line
import { Button } from 'antd'
import { HashRouter } from 'react-router-dom'
import BaseLayout from './layout'
import { Provider } from 'react-redux'
import store from './store'
function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<BaseLayout />
			</HashRouter>
		</Provider>
	)
}

export default App
