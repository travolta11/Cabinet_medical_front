import { Descriptions ,Form,Input,Button,Col,Row} from 'antd';
import React from 'react'
import { motion } from 'framer-motion';
const VoirOrdonance = () => {

    const { TextArea } = Input;
    const isInputDisabled = true;


  return (<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    
    
    
    
    >
    <>
   
<Descriptions title="Ordonance " layout="vertical">
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Nom complet de patient">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Email">@gmail.com</Descriptions.Item>
    
    {/* <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, qqqqqqqqqqhjcqbbqb bqbq bqbqjbqjb jkqjb hina
    </Descriptions.Item> */}
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Maladie">empty</Descriptions.Item>
    
<Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Numéro de patient">empty</Descriptions.Item>
<Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label=" La date d'ordonance">09-08-2023</Descriptions.Item>

<br></br>

<Form.Item layout="vertical" labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Details d'ordonance">
          <TextArea disabled={isInputDisabled} rows={5} />
        </Form.Item>
  </Descriptions>
  <Button  href="/ordonance" variant="contained" disableElevation>
      <b>Retour</b>
    </Button>
  </></motion.div>
  );
}

export default VoirOrdonance