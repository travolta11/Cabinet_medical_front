import { Avatar, Rate, Space, Table, Typography,Popconfirm,Button  } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import * as React from 'react';
import { motion } from 'framer-motion';
function RendezVous() {
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };




  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (<motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
    
    
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Rendez-vous</Typography.Title>
      <Button type="primary"  href="/rendezvous/ajouterrendezvous" variant="contained" disableElevation>
        <b>Ajouter un rendez-vous</b>
    </Button>
      <Table
        loading={loading}
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
          {
          
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Button type="primary" href="/rendezvous/modifierrendezvous">Modifier</Button>,
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
    </Space></motion.div>
  );
}
export default RendezVous;
