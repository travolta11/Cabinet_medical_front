import {   AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,Typography,Popconfirm } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
const ModifierPatient  = ({ initialValues, onSubmit }) => {
  const [formValues, setFormValues] = useState({});
  const { id } = useParams();
  const [form] = Form.useForm();
  
  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  
   
      const onFinish = (values) => {
        onSubmit(values);
      };
    
  return (

    <motion.div 
initial={{opacity:0,translateX: -10,translateY:-10}}
animate={{opacity:1,translateY:-10}}
exit={{opacity:0}}
transition={{duration : 0.3, delay: 0.7}}



>

    <Form name="form_item_path" layout="vertical" initialValues={initialValues} onFinish={onFinish}>
          <Typography.Title level={4}>Modifier le Patient</Typography.Title>
          <Row>
    <Col
  xs={{
    span: 9,
    offset: 7,
  }}
  
>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
        <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between"}}>
          <Form.Item name="nom" label="Nom"  rules={[
          { 
            
            required: true,
            message: 'Veuillez selectionner le nom!',
          },
        ]}> 
            <Input type= 'text' />
          </Form.Item>
          {/* <MyFormItem name="firstName" label="Prenom"  rules={[
          {
            required: true,
            message: 'Veuillez selectionner le prenom!',
          },
        ]}>
            <Input />
          </MyFormItem> */}
          </div>
          <MyFormItemGroup>
          <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between"}}>

          <Form.Item 
        name="email"
        label="E-mail"
        rules={[
          {
            
            message: "Veuillez saisir l'email!",
          },
          {
            required: true,
            message: "Veuillez saisir l'email!",
          },
        ]}
      >
        <Input type= 'email'/>
      </Form.Item>
        
        
        <Form.Item name="age" label="Age"  rules={[
          { 
            
            required: true,
            message: "Veuillez saisir l'age!",
          },
        ]}>
          <Input type="number" />
          
        </Form.Item></div></MyFormItemGroup>
        </MyFormItemGroup>
        <Form.Item
        name="sexe"
        label="Sexe"
        rules={[
          { type:"text",
            required: true,
            message: 'Veuillez selectionner le sexe!',
          },
        ]}
      >
        <Select placeholder="Veuillez selectionner le sexe!">
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
            message: 'Veuillez saisir votre numéro de telephone!',
          },
        ]}
      >
        <Input type="text"
          
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
     

      <Form.Item name="adresse" label="Adresse"  rules={[
          { 
            required: true,
            message: "Veuillez selectionner l'adresse!",
          },
        ]}> 
            <Input type="text" />
          </Form.Item>



      </MyFormItemGroup>
      
                  <Button danger type="text" href='/patient'>Annuler</Button>
             
      <Button type="primary" htmlType="submit">
        Enregistrer
      </Button>
      </Col></Row>
    </Form></motion.div>
  );
};
export default ModifierPatient ;