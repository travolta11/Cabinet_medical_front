import { Descriptions ,Form,Input,Button,Col,Row} from 'antd';
import React from 'react'
import { motion } from 'framer-motion';
const VoirResultat = () => {

    const { TextArea } = Input;
    const isInputDisabled = true;


  return (<motion.div 
    initial={{opacity:0,translateX: -10,translateY:-10}}
    animate={{opacity:1,translateY:-10}}
    exit={{opacity:0}}
    transition={{duration : 0.3, delay: 0.7}}
    
    
    
    >
    
    <>
   
<Descriptions title="Resultat de test" layout="vertical">
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Nom complet de patient">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Email">@gmail.com</Descriptions.Item>
    
    {/* <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, qqqqqqqqqqhjcqbbqb bqbq bqbqjbqjb jkqjb hina
    </Descriptions.Item> */}
    <Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Maladie">empty</Descriptions.Item>
    
<Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Nom de test">empty</Descriptions.Item>
<Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Numéro de patient">empty</Descriptions.Item>
<Descriptions.Item labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label=" La date de resultat">09-08-2023</Descriptions.Item>

<br></br>

<Form.Item layout="vertical" labelStyle={{ fontWeight: 'bold', color: '#1677ff' , fontSize:"16px" }} label="Details de resultat">
          <TextArea disabled={isInputDisabled} rows={4} />
        </Form.Item>
  </Descriptions>
  <Button type="primary" href="/laboratoire/voirresultat/modifierresultat" variant="contained" disableElevation>
      <b>Modifier la resultat</b>
    </Button>
    <Button style={{marginLeft:"1cm"}} href="/laboratoire" variant="contained" disableElevation>
      <b>Retour</b>
    </Button>
  </></motion.div>
  );
}

export default VoirResultat