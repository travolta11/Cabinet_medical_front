import { Avatar, Rate, Space, Table, Typography,Popconfirm,Button  } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import * as React from 'react';
import { motion } from 'framer-motion';
function Pharmacie() {
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
      <Typography.Title level={4}>Liste des medicament</Typography.Title>
      <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between"}}>

      <Button type="primary" href="/pharmacie/ajoutermedicament" variant="contained" disableElevation>
      <b>Ajouter un medicament</b>
    </Button>
    <Button type="primary"  href="/pharmacie/ajoutercategorie" variant="contained" disableElevation>
    <b>Ajouter un Categorie</b>
    </Button></div>
      <Table
        loading={loading}
        columns={[
          {
            title: "Nom",
            dataIndex: "name",
            
          },
          {
            title: "Barecode",
            dataIndex: "name",
          },
          {
            title: "Categorie",
            dataIndex: "name",
           
          },
         
          {
          
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Button type="primary" href="/pharmacie/modifiermedicament">Modifier</Button>,
          },
          {
           
            dataIndex: 'operation',
            render: (_, record) =>
              dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                  <Button danger type="text">
                    Supprimer
                    </Button>
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
export default Pharmacie;