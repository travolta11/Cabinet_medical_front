import {   Space, Table, Typography,Popconfirm,Button,   } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import * as React from 'react';
import { Col, Row } from 'antd';
import VoirPatient from "../../Pages/Patient/VoirPatient";
import { motion } from 'framer-motion';

function DossiersMedicaux() {
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
<motion.div 
initial={{opacity:0,translateX: -10,translateY:-10}}
animate={{opacity:1,translateY:-10}}
exit={{opacity:0}}
transition={{duration : 0.3, delay: 0.7}}



>



    <Row>
    <Col
  xs={{
    span: 1,
    offset: -1,
  }}
  
>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dossier Medicaux</Typography.Title>
      
    
      <Table
        loading={loading}
        columns={[
          
          {
            title: "Nom de patient",
            dataIndex: "lastName",
          },
          {
            title: "Prenom de patient",
            dataIndex: "firstName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Tele",
            dataIndex: "phone",
          },
          {
            title: "Sexe",
            dataIndex: "gender",
          },
          {
            title: "Age",
            dataIndex: "age",
          },

          {
            title: "Addresse",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
          
    
          {
          
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Button type="primary" href="/dossiersmedicaux/afficherdossier">Afficher le dossier </Button>,
          },
          {
           
            dataIndex: 'operation',
            render: (_, record) =>
              dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                  <Button danger type="text">Supprimer</Button>
                </Popconfirm>
              ) : null,
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space></Col></Row>
    </motion.div>
  );
}
export default DossiersMedicaux ;
