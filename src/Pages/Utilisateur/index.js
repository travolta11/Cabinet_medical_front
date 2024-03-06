import {   Space, Table, Typography,Popconfirm,Button,Input  } from "antd";
import { useEffect, useState,useRef } from "react";
import * as React from 'react';
import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import axios from "axios";
import Column from "antd/es/table/Column";
import ModifierUtilisateur from './ModifierUtilisateur';
import AjouterUtilisateur from "./AjouterUtilisateur";


const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);




function Utilisateur() {
 
  

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [showTable, setShowTable] = useState(true); 

  const handleAjouterClick = () => {
    // Perform any necessary logic or data manipulation

    // Redirect to a new page using React Router
    
  };
  // const handleDelete = (key) => {
  //   const newData = dataSource.filter((item) => item.key !== key);
  //   setDataSource(newData);
  // };

//ajouterutilisateur
const [showAjouterForm, setShowAjouterForm] = useState(false);

const handleAddClick = () => {
 
 setShowModifierForm(false);
  setShowAjouterForm(true);
  setShowTable(false);
};









// const handleAjouterFormSubmit = (values) => {
   
//   axios.post("http://127.0.0.1:8000/api/utilisateurs", values)
//     .then(() => {
//       // Update successful, perform any necessary logic or redirect
      
//       setShowAjouterForm(false);
//       window.location.reload();
//     })
//     .catch((error) => {
//       console.error('Error updating utilisateur:', error);
//     });
// };








//modifier utilisateur
const [selectedUtilisateurId, setSelectedUtilisateurId] = useState(null);
  const [showModifierForm, setShowModifierForm] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState({});
  
 

 

  const handleModifyClick = (id) => {
    const selectedUtilisateur = dataSource.find((user) => user.id === id);
    setSelectedUtilisateurId(id);
    setInitialFormValues({
      id: selectedUtilisateur.id,
      email: selectedUtilisateur.email,
      nom: selectedUtilisateur.nom,
      adresse: selectedUtilisateur.adresse,
      tel: selectedUtilisateur.tel,
      
    });
    setShowModifierForm(true);
    setShowAjouterForm(false);
    setShowTable(false);
  };

  const handleModifierFormSubmit = (values) => {
   
    axios.put(`http://127.0.0.1:8000/api/users/${selectedUtilisateurId}`, values)
      .then(() => {
        // Update successful, perform any necessary logic or redirect
        setSelectedUtilisateurId(null);
        setShowModifierForm(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error updating utilisateur:', error);
      });
  };



//delete utilisateur
  const handleDelete = (key) => {
    setLoading(true);
    axios
      .delete(`http://127.0.0.1:8000/api/users/${key}`)
      .then(() => {
        // Delete successful, update the table data
        setCurrentPage(1); // Reset to the first page
        setLoading(false);
  
        // Fetch the updated data after deletion
        axios
          .get(`http://127.0.0.1:8000/api/users?page=${currentPage}&limit=${pageSize}`)
          .then((response) => {
            setDataSource(response.data['hydra:member']);
            setTotalItems(response.data['hydra:totalItems']);
          })
          .catch((error) => {
            console.error("Error fetching data from API:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        setLoading(false);
      });
  };
  




  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  






  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/users?page=${currentPage}&limit=${pageSize}`)
      .then((response) => {
        setDataSource(response.data['hydra:member']); // Update this line
        setTotalItems(response.data['hydra:totalItems']); // Update this line
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  }, [currentPage, pageSize]);
  


  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Rechercher ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 95,
            }}
          >
            Recherche
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Réinitialiser
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filtre
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Fermer
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const navigate = useNavigate();

  const columns = [
    // Define your table columns here
    // Example: { title: "Name", dataIndex: "name", key: "name" },
    // { title: "id", dataIndex: "id", key: "id", width: '30%',
    // },
    { title: "Email", dataIndex: "email", key: "email" , width: '30%',
     },
    { title: "nom", dataIndex: "nom", key: "nom", width: '30%',
    ...getColumnSearchProps(''),},
    
   
    
    { title: "Tel", dataIndex: "tel", key: "tel" , width: '30%',
     },
    { title: "Adresse", dataIndex: "adresse", key: "adresse" , width: '30%',
     },
     { title: "Roles", dataIndex: "roles", key: "roles" , width: '30%',
     },
    
      {
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (_, record) => (
          <Button
            type="primary"
            onClick={() => handleModifyClick(record.id)} // Pass the ID to the click handhreler
           

          >
            Modifier
          </Button>
        ),
      }
      ,
      {
        dataIndex: 'operation',
        render: (_, record) =>
          dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
              <Button danger type="text">Supprimer</Button>
            </Popconfirm>
          ) : null,
      }
      ,

  ];
  
  
 
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
{showTable && (<Space size={20} direction="vertical">
      <Typography.Title level={4}>Utilisateur</Typography.Title>
      
     
    <Button
      onClick={() => handleAddClick()}
      type="primary"
      variant="contained"
      disableElevation
    >
      <b>Ajouter un utilisateur</b>
    </Button>
 

    
       <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: totalItems,
        }}
      ></Table>  
    </Space>)}</Col></Row>

    {showModifierForm && (
        <ModifierUtilisateur
          initialValues={initialFormValues}
          onSubmit={handleModifierFormSubmit}
        />
      )}

    {showAjouterForm && 
    <AjouterUtilisateur
    
    
    
    />



    }


    </motion.div>
  );
}
export default Utilisateur;
