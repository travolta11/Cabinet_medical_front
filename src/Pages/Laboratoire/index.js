import { Avatar, Rate, Space, Table, Typography,Popconfirm ,Button} from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import * as React from 'react';
import { motion } from 'framer-motion';
function Laboratoire() {
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

    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Laboratoire</Typography.Title>
      <div style={{display: "flex",  justifyContent: "space-between"}}>
      <Button type="primary" href="/laboratoire/ajoutertest" variant="contained" disableElevation>
      <b> Ajouter un test</b>
    </Button>
      <Button type="primary" href="/laboratoire/ajouterresultat" variant="contained" disableElevation>
      <b>Ajouter une resultat</b>
    </Button>
    </div>
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
            title: "  Maladie",
            dataIndex: "name",
          },
          {
            title: "Nom de test",
            dataIndex: "name",
          },
          {
            title: "Sexe",
            dataIndex: "gender",
          },
          {
            title: "La date de test",
            dataIndex: "date",
          },

          {
          
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Button type="primary" href="/laboratoire/voirresultat">Voir Resultat</Button>,
          },
          {
          
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Button  href="/laboratoire/modifiertest">Modifier</Button>,
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
    </Space>
    </motion.div>
  );
}
export default Laboratoire;
