import {   AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,Typography,Select
     } from 'antd';
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';


const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];




const AjouterOrdonanace = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    
    const { TextArea } = Input;
  return (<motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
    
    <Form name="form_item_path" layout="vertical" >
          <Typography.Title level={4}>Ajouter une Ordonanace</Typography.Title>
          <Row>
    <Col
  xs={{
    span: 9,
    offset: 7,
  }}
  
>
          <Form.Item label="Selectionner un patient">
          <Select
    showSearch
    placeholder="Rechercher un patient"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
      </Form.Item>
          <Form.Item
        name="Maladie"
        label="Maladie"
        rules={[
          {
            type: 'name',
            message: "Veuillez saisir la maladie!",
          },
          {
            required: true,
            message: 'Veuillez saisir la maladie!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Ajouter un medicament">
      <Select
      mode="multiple"
      placeholder="Recherche un medicament"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    /></Form.Item>
      <Form.Item label="Descriprion">
          <TextArea rows={4} />
        </Form.Item>
      
        
        <Button danger type="text" href='/ordonance'>Annuler</Button>

      <Button type="primary" htmlType="submit">
        Enregistrer
      </Button>
      </Col></Row>
    </Form></motion.div>
  );
};
export default AjouterOrdonanace ;