import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, } from 'antd'
import { Link } from 'react-router-dom'
import Routes from '@/router'
import { RoutesData } from '@/router/config'
import { Iroute } from '@/types/route'
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout
let aaa
export class App extends Component {
    state = {
        current: 'mail',
    }
    handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    getMenuNodes = (menuList: Iroute[]) => {
        return menuList.map(item => {
            if (item.hidden) {
                return
            }
            if (!item.children || item.children.length === 0) {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            } else {
                return (<SubMenu
                    key={item.path}
                    title={
                        <span>
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    {
                        this.getMenuNodes(item.children)
                    }
                </SubMenu>);
            }
        });
    }
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[this.state.current]} onClick={this.handleClick}>
                        {

                            this.getMenuNodes(RoutesData)
                        }
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>
                            <Link to='/'>
                                <span>{'Home'}</span>
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Routes />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>eeeeeeee</Footer>
            </Layout>
        )
    }
}

export default App
