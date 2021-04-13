import React from "react";
import {  Layout, Menu, Breadcrumb  } from "antd";
import { Link, withRouter } from "react-router-dom";

import {connect} from 'react-redux';
import * as actions from '../store/actions/auth.js';



const { Header, Content, Footer } = Layout ;










function CustomLayout(props) {
  return (
    <div className="layout">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>



            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>

            {
              props.isAuthenticated ? 
              <>
                <Menu.Item key="2">
                    <Link to="/logout" onClick={props.logout}>Logout</Link>
                </Menu.Item>
              </> :
              <>
                <Menu.Item key="2">
                    <Link to="/login">Login</Link> 
                </Menu.Item>
              </>  
            }

          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {<Breadcrumb style={{ margin: "16px 0" }}>
               
          </Breadcrumb> }
          <div className="site-layout-content">
               {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
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

