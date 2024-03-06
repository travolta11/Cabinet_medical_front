import { Button, Form, Input, Radio,Typography } from 'antd';
import {  useState } from 'react';

import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { motion } from 'framer-motion';

import {   AutoComplete, Col,Row,} from 'antd';



   const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
const AjouterTest = () => {
    const { TextArea } = Input;
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
  };
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
 
  return (<motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
    
    <Form name="form_item_path" layout="vertical" >
        
        <Typography.Title level={4}>Ajouter un test</Typography.Title>
        <Row>
    <Col
  xs={{
    span: 7,
    offset: 7,
  }}
  
>
        <Form.Item label='Nom de test'>
  
          <Input /> </Form.Item>
        <Form.Item label='Maladie'>
  
          <Input /> </Form.Item>

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
      <Form.Item label="La date">
      <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
  </Space>

      </Form.Item>

      
        <Button danger type="text" href='/laboratoire'>Annuler</Button>
        <Button type="primary">Enregistrer</Button>
     </Col></Row>
    </Form></motion.div>
  );
};
export default AjouterTest;