import React, { Component } from 'react'
import { Switch, Route, Redirect, Link, withRouter } from 'react-router-dom'

import { RoutesData } from './config'
import { mapComponents } from './mapComponents'

import { Iroute } from '@/types/route'
// function itemRoute(item: Iroute): any {
// 	if (item.children && item.children.length != 0) {
// 		item.children.map(i => itemRoute(i))
// 	} else {
// 		return <Route key={item.path} path={item.path} component={mapComponents[item.component || '']} />
// 	}
// }
export class router extends Component {
	render() {
		return (
			<Switch>
				{RoutesData.map((route: Iroute) => {
					// itemRoute(route)
					const router = (item: Iroute) => {
						return <Route key={item.path} path={item.path} component={mapComponents[item.component || '']} />
					}
					return route.children && route.children.length !== 0
						? route.children && route.children.map(i => router(i)) : router(route)
				})}
				<Redirect to="/login" />
			</Switch>
		)
	}
}

export default router

