export interface Iroute {
	path: string
	title: string
	icon?: string
	hidden?: boolean
	component?: string
	children?: Iroute[]
}
