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
import { motion } from 'framer-motion';

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};





const ModifierMedicament = () => {
    
    const { TextArea } = Input;
  return (<motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
    
    <Form name="form_item_path" layout="vertical" >
          <Typography.Title level={4}>Modifier le medicament</Typography.Title>
          <Row>
    <Col
  xs={{
    span: 9,
    offset: 7,
  }}
  
>
          <Form.Item label="Selectionner une categorie">
          <Select
    showSearch
    placeholder="Rechercher une categorie"
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
        name="Nom"
        label="Nom"
        rules={[
          { required: true,
            type: 'name',
            message: "Veuillez saisir le nom de medicament!",
          },
          
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item     name="Nom"
        label="Bar-code">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Descriprion">
          <TextArea rows={4} />
        </Form.Item>
      
        
        <Button danger type="text" href='/pharmacie'>Annuler</Button>

      <Button type="primary" htmlType="submit">
        Enregistrer
      </Button>
      </Col></Row>
    </Form></motion.div>
  );
};
export default ModifierMedicament ;