import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  CalendarOutlined,UserAddOutlined,FileTextOutlined,DiffOutlined,FolderOpenOutlined 
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography, Badge, Calendar,BadgeProps,Button,Modal } from "antd";

import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";

import './style.css'
import { Col, Row } from 'antd';
import moment from 'moment';
import { motion } from 'framer-motion';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};






function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  
  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (

    <motion.div 
initial={{opacity:0,translateX: -10,translateY:-10}}
animate={{opacity:1,translateY:-10}}
exit={{opacity:0}}
transition={{duration : 0.3, delay: 0.7}}



>

    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space  direction="horizontal">
        <Row>
        <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      
    >
        <DashboardCard 
          icon={
            <UserOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Médecins"}
          value={orders}
        />
        <DashboardCard 
          icon={
            <UserAddOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Patient"}
          value={inventory}
        /></Col></Row>
        <Row>
        <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      
    >
        <DashboardCard 
          icon={
            <FileTextOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Dossiers Medicaux"}
          value={customers}
        />
        <DashboardCard
          icon={
            <DiffOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Ordonances"}
          value={revenue}
        /></Col></Row>
        <Row>
        <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      
    >
        <DashboardCard
          icon={
            <FolderOpenOutlined 
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Rapport de Labo"}
          value={revenue}
        />
        <DashboardCard
          icon={
            <CalendarOutlined 
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Rendez-Vous"}
          value={revenue}
        /></Col></Row>
      <Row>
        <Col
      xs={{
        span: 5,
        offset: 24,
      }}
      
    >   <DashboardChart /></Col></Row>
      </Space>
      
        <DerniersRv />
        
      
    </Space></motion.div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ height: "160px",width:"220px" }}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function DerniersRv() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <Row>
        <Col
      xs={{
        span: 5,
        offset: 1,
      }}
      
    >
    <>
      <h4>Les derniers rendez-vous</h4>
      <Table
        columns={[
          {
            title: "Médecin",
            dataIndex: "name",
            
          },
          {
            title: "Nom de patient",
            dataIndex: "name",
          },
          {
            title: "Email de patient",
            dataIndex: "email",
           
          },
          {
            title: "Schedule",
            dataIndex: "date",
           
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </></Col></Row>
  );
}

const DashboardChart = () => {
  const [visible, setVisible] = useState(false); // State for controlling the visibility of the pop-up

  const eventsData = [
    {
      date: moment().add(1, 'days').format('YYYY-MM-DD'),
      title: 'Event 1',
    },
    {
      date: moment().add(3, 'days').format('YYYY-MM-DD'),
      title: 'Event 2',
    },
    // Add more events as needed
  ];

  const dateCellRender = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const events = eventsData.filter((event) => event.date === formattedDate);

    return (
      <ul className="events">
        {events.map((event, index) => (
          <li key={index}>
            <Badge status="success" text={event.title} />
          </li>
        ))}
      </ul>
    );
  };

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        
        size="large"
        onClick={handleOpenModal}
        icon={<CalendarOutlined />}
        style={{ marginBottom: '275px' ,marginLeft: '0cm' }}
      >
        Ouvrir le calendrier
      </Button>
      <Modal
        title="Calendar"
        visible={visible}
        onCancel={handleCloseModal}
        footer={null}
        width={900}
      >
        <Calendar dateCellRender={dateCellRender} />
      </Modal>
    </>
  );
};

export default Dashboard;



// import React from 'react';

// const Dashboard = ({ setIsLoggedIn }) => {
//   const email = localStorage.getItem('email');

//   const handleLogout = () => {
//     // Clear the token and email from local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('email');

//     // Update login status
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <h2>Welcome, {email}!</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
