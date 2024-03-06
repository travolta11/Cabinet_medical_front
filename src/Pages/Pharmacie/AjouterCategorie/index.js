import {   AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,Typography,
     } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';



const { TextArea } = Input;



const AjouterCategorie = () => {
    
  
  return (
    <motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
      <Form name="form_item_path" layout="vertical" >
          <Typography.Title level={4}>Ajouter une Categorie</Typography.Title>
          <Row>
    <Col
  xs={{
    span: 9,
    offset: 7,
  }}
  
>
          <Form.Item
style={{ width: '200px' }}        name="Nom"
        label="Nom"
        rules={[
          {
            type: 'name',
            message: "Veuillez saisir le nom de categorie!",
          },
          {
            required: true,
            message: 'Veuillez saisir le nom de categorie!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Description de categorie">
          <TextArea style={{ width: '400px' }}  rows={6} />
        </Form.Item>
      
        
        <Button danger type="text" href='/pharmacie'>Annuler</Button>
      <Button type="primary" htmlType="submit">
        Enregistrer
      </Button>
      </Col></Row>
    </Form></motion.div>
  );
};
export default AjouterCategorie ;