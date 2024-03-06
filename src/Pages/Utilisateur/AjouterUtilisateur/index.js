import {   AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,Typography } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';




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
const AjouterUtilisateur = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
  const onFinish = (value) => {
    console.log(value);
  };
  return (<motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
    
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <Typography.Title level={4}>Ajouter un utilisateur</Typography.Title>
      <Row>
    <Col
  xs={{
    span: 9,
    offset: 7,
  }}
  
>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="lastName" label="Nom"  rules={[
          {
            required: true,
            message: 'Veuillez saisir le nom!',
          },
        ]}> 
            <Input />
          </MyFormItem>
          <MyFormItem name="firstName" label="Prenom"  rules={[
          {
            required: true,
            message: 'Veuillez selectionner le prenom!',
          },
        ]}>
            <Input />
          </MyFormItem>
          <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: "Veuillez saisir l'email!",
          },
          {
            required: true,
            message: 'Veuillez saisir E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        </MyFormItemGroup>

        <MyFormItem name="age" label="Age"  rules={[
          {
            required: true,
            message: "Veuillez saisir l'age!",
          },
        ]}>
          <Input />
          
        </MyFormItem>
        <MyFormItem
        name="gender"
        label="Sexe"
        rules={[
          {
            required: true,
            message: 'Veuillez selectionner le sexe!',
          },
        ]}
      >
        <Select placeholder="Veuillez selectionner le sexe!">
          <Option value="male">Masculin</Option>
          <Option value="female">Féminin</Option>
         
        </Select>
      </MyFormItem>
      <MyFormItem
        name="phone"
        label="Tele"
        rules={[
          {
            required: true,
            message: 'Veuillez saisir votre numero de telephone!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </MyFormItem>
      <MyFormItem name="adress" label="Adresse"  rules={[
          {
            required: true,
            message: "Veuillez saisir l'adresse!",
          },
        ]}> 
            <Input />
          </MyFormItem>
          <MyFormItem name="specialite" label="Spécialité"  rules={[
          {
            required: true,
            message: 'Veuillez saisir la spécialité!',
          },
        ]}> 
            <Input />
          </MyFormItem>


      </MyFormItemGroup>
      <Button danger type="text" href='/utilisateur'>Annuler</Button>
      <Button type="primary" htmlType="submit">
        Enregistrer
      </Button>
      </Col></Row>
    </Form></motion.div>
  );
};
export default AjouterUtilisateur ;