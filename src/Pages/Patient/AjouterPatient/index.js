import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select, Typography, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;
const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const AjouterPatient = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nom: '',
    sexe: '',
    age: '',
    email: '',
    tel: '',
    adresse: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handlePost = () => {
    const id = uuidv4();
    const currentDateTime = new Date().toISOString();
  
    // Update the formData object with the current date and time
    const updatedFormData = {
      ...formData,
      createdAt: currentDateTime,
    };
  
    axios
      .post("http://127.0.0.1:8000/api/patients", { ...updatedFormData })
      .then((response) => {
        // Handle success
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  

  const onFinish = (value) => {
    console.log(value);
    onSubmit(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -10, translateY: -10 }}
      animate={{ opacity: 1, translateY: -10 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    >
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <Typography.Title level={4}>Ajouter un Patient</Typography.Title>
        <Row>
          <Col xs={{ span: 9, offset: 7 }}>
            <MyFormItemGroup prefix={['user']}>
              <MyFormItemGroup prefix={['name']}>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <Form.Item name="nom" label="Nom" rules={[{ required: true, message: 'Veuillez sélectionner le nom!' }]}>
                    <Input value={formData.nom} onChange={(e) => handleInputChange('nom', e.target.value)} type='text' />
                  </Form.Item>
                </div>
                
                <MyFormItemGroup>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        { required: true, message: "Veuillez saisir l'e-mail!" },
                      ]}
                    >
                      <Input value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} type='email' />
                    </Form.Item>
                    <Form.Item name="age" label="Age" rules={[{ required: true, message: "Veuillez saisir l'âge!" }]}>
                      <Input value={formData.age} onChange={(e) => handleInputChange('age', e.target.value)} type="number" />
                    </Form.Item>
                  </div>
                </MyFormItemGroup>
              </MyFormItemGroup>
              <Form.Item
                name="sexe"
                label="Sexe"
                rules={[
                  {
                    required: true,
                    message: 'Veuillez sélectionner le sexe!',
                  },
                ]}
              >
                <Select value={formData.sexe} onChange={(value) => handleInputChange('sexe', value)} placeholder="Veuillez sélectionner le sexe!">
                  <Option value="Masculin">Masculin</Option>
                  <Option value="Féminin">Féminin</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="tel"
                label="Tele"
                rules={[
                  {
                    required: true,
                    message: 'Veuillez saisir votre numéro de téléphone!',
                  },
                ]}
              >
                <Input value={formData.tel} onChange={(e) => handleInputChange('tel', e.target.value)} type="text" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="adresse"
                label="Adresse"
                rules={[
                  {
                    required: true,
                    message: "Veuillez sélectionner l'adresse!",
                  },
                ]}
              >
                <Input value={formData.adresse} onChange={(e) => handleInputChange('adresse', e.target.value)} type="text" />
              </Form.Item>
            </MyFormItemGroup>
            <Button danger type="text" href="/patient">
              Annuler
            </Button>
            <Button type="primary" htmlType="submit" onClick={handlePost}>
              Enregistrer
            </Button>
          </Col>
        </Row>
      </Form>
    </motion.div>
  ); 
};

export default AjouterPatient;