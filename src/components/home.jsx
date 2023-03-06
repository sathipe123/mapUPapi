import React, { useState } from 'react';
import {
    DoubleRightOutlined ,
    DoubleLeftOutlined,
    InfoCircleOutlined,
    HomeOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Button, Dropdown } from 'antd';
import Form from './form';
import Map from './osm';
import Logo from '../img/darkmap.jpg';


const { Header, Sider: Slider, Content, Footer } = Layout;

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
          key: '1',
          label: (
            <span onClick={() => setLoggedIn(false)}>
              Log out
            </span>
          ),
        }]
    return (
      <div className='app'>
        <Layout>
            <Slider trigger={null} collapsible collapsed={collapsed} theme={"dark"}>
                <Menu
                    theme={"dark"}
                    mode="inline"
                
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <InfoCircleOutlined />,
                            label: 'About Us',
                        },
                    ]}
                />
                 
            </Slider>
            <Layout className="site-layout">
       
                <Header style={{ background: "black", paddingLeft: 0 }} className="header">
                    {React.createElement(collapsed ? DoubleRightOutlined :  DoubleLeftOutlined  , {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <p
                    style={{ color: "#850b8a", fontSize: "30px",marginTop: "20px",fontWeight: "400px" , marginLeft: "20px"}}
                    >mapUP &nbsp;
                    <img src={Logo} className="logo" 
                    width= "40px"
                    height= "40px"
                    /></p>
                    <section>
                        {loggedIn ? <Dropdown menu={{items}} placement="bottomLeft">
                            <Button>
                                <UserOutlined /> SAHIL THIPE
                            </Button>
                        </Dropdown>
                            :
                            <Button onClick={() => setLoggedIn(true)}>
                                Log in
                            </Button>
                        }
                    </section>
                </Header>
                <Content>
                 <Form />
                <Map/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright © 2023 MapUp</Footer>
            </Layout>
        </Layout>
      </div>
    );
};

export default Home;