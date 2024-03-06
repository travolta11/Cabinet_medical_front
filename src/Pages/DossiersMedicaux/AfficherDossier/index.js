import { Descriptions ,Form,Input,Button,Col,Row} from 'antd';
import React from 'react'
import { motion } from 'framer-motion';
const   AfficherDossier = () => {

    const { TextArea } = Input;
    const isInputDisabled = true;


  return (<motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
    
    <>
    <Button style={{marginLeft:'24cm'}}  href="/laboratoire/voirresultat/modifierresultat" variant="contained" disableElevation>
      <b>Imprimer le dossier medical</b>
    </Button>
    


    <Row>
    <Col
  xs={{
    span: 9,
    offset: -1,
  }}
  
>
<Descriptions title="Resultat de test" layout="vertical">
<Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Numéro de patient">empty</Descriptions.Item>
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Nom complet de patient">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Email">@gmail.com</Descriptions.Item>
    
    {/* <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, qqqqqqqqqqhjcqbbqb bqbq bqbqjbqjb jkqjb hina
    </Descriptions.Item> */}

    


<br></br>


  </Descriptions>
  </Col></Row>
  </></motion.div>
  );
}

export default AfficherDossier