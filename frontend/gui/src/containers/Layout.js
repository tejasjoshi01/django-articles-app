
import React from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth.js';

// design
import "./Layout.css" ; 
import { HeartTwoTone } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;





function CustomLayout(props) {


  return (
    <div className="layout">
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["3"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>

        {props.isAuthenticated ? (
          <>
            <Menu.Item key="2">
              <Link to="/logout" onClick={props.logout}>
                Logout
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/create">Write Article!</Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >



          { props.isAuthenticated ?
            (
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item >
                  <Link key="1" to="/create">Write Article!</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/logout" onClick={props.logout}>Logout</Link> 
                </Menu.Item>
              </SubMenu>
            )
              :
            (  
              <SubMenu key="sub1" title="Please Login In! "/>
            )
          }



        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {<Breadcrumb style={{ margin: "16px 0" }}>
               
          </Breadcrumb> }
          <div className="site-layout-content">
               {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center"}}>
          <p> Made with     <HeartTwoTone twoToneColor="#eb2f96" /> by <a href="https://github.com/tejasjoshi01">Tejas.</a></p>
        </Footer>
      </Layout>
    </Layout>
  </Layout>
    </div>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
       logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));





