import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,AppstoreOutlined,
     ShopOutlined,
   ShoppingCartOutlined,
   CalendarOutlined,
    ExperimentOutlined,
    FileTextOutlined ,
    PlusSquareOutlined,
  DiffOutlined ,
    DashboardOutlined,
     MailOutlined, SettingOutlined,UserAddOutlined,MenuUnfoldOutlined
} from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Button, Layout, Menu, theme,Tooltip,message,Dropdown,Typography  } from 'antd';
import { useState ,useEffect} from 'react';
import { useLocation, useNavigate,Outlet } from "react-router-dom";
import AppRoutes from '../AppRoutes';
import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import './style.css'
const { Header, Sider, Content,Footer } = Layout;


const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const items = [
  {
    label: 'Profile',
    key: '1',
    
  },
 
  {
    label: 'Deconnexion',
    key: '2',
  
    danger: true,
  },

];



const menuProps = {
  items,

};



const AppComponents = () => {
  const [activeMode, setActiveMode] = useState("Cabinet Medical");

  const [logoText, setLogoText] = useState("Cabinet Medical");
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (logoText === "Cabinet Medical") {
      setLogoText("CM");
    } else {
      setLogoText("Cabinet Medical");
    }
  };
 

  return (
    
    <div className="App">
    <Layout>
      <Sider                   
         breakpoint="lg"
         collapsedWidth="60"
         onBreakpoint={(broken) => {
           console.log(broken);
         }}    
            
       trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div style={{ textAlign: "center", padding: "16px", color: "white" ,fontSize:'20px',
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",}}>
         {logoText}
      </div>
    
        <Menu
          theme="dark"
          mode="inline"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          const items={[
                        {
                          label: "Dashbaord",
                          icon: <DashboardOutlined />,
                          key: "/",
                        },
                        {
                          label: "Utilisateur",
                          key: "/utilisateur",
                          icon: <UserOutlined />,
                        },
                        {
                          label: "Patient",
                          key: "/patient",
                          icon: <UserAddOutlined />,
                        },
                       
                        {
                          label: "Rendez-vous",
                          key: "/rendezvous",
                          icon: <CalendarOutlined />,
                        },
              
                       
                        {
                          label: "Pharmacie",
                          key: "/pharmacie",
                          icon: <PlusSquareOutlined />,   
                         
                        },
                        {
                          label: "Laboratoire",
                          key: "/laboratoire",
                          icon: <ExperimentOutlined />,
                        },
                       
                      
                        {
                          label: "Ordonanace",
                          key: "/ordonance",
                          icon: <  DiffOutlined/>,   
                         
                        },
                        {
                          label: "Dossier Medicaux",
                          key: "/dossiersmedicaux",
                          icon: < FileTextOutlined/>,   
                         
                        },
                      
                      
                      
                      ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >

          
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              setCollapsed(!collapsed);
              handleButtonClick();
            }}
            
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

<Row>
    <Col
  xs={{
    span: 9,
    offset: 14,
  }}
  
>
<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-50px" }}>
  <Space wrap>
    <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
      Full name
    </Dropdown.Button>
  </Space>
</div>
</Col></Row>

        </Header>
        <motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
        <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          height: '100%',
          minHeight: 280,
          background: colorBgContainer,
          overflow:'auto',
          flex: 1,
          animation: 'fadeIn 0.5s ease-in-out',
          
        }}
      >
       <AppRoutes />
      </Content></motion.div>
      <Footer
        style={{
          
   
          textAlign: 'center',
          margin:10,
          padding:10,
          
          
          
        }}
      >
        <Typography.Title level={5}>     Norsys Stage Cabinet Medical ©2023 Created by Alfitouri Achraf & Liqali Issam</Typography.Title>
   
      </Footer>
      </Layout> 
    </Layout>
    </div>
    
  
  
    );
};
export default AppComponents;