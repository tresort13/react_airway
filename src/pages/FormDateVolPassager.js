import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  './Login.css';
import {Link} from  'react-router-dom';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';

const useState = React.useState

function FormDateVolPassager(props)
{
    const[vol,setVol] = useState({infoVol :{
        dateType:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Veuillez selectionner la date du vol")
    const [couleur,setCouleur] = useState("text-dark")
    const submitVol = (e)=>
    {
        props.setTemps(vol.infoVol.dateType)
        console.log(vol.infoVol.dateType)    
                
    }

    const inputChanged = (event)=>
    {
         const cred = vol.infoVol;
         cred[event.target.name] = event.target.value;
         setVol({infoVol:cred})
    }

return (
    <>
    <Header username={props.username}/>

{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white',width:750}} >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={6}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    <Row className='justify-content-center  pb-2' >
        <Col xs={6}>
        <Link to="/menu_passagers">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>
        </Col>
    </Row>
    
<Form>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateType"  type="date" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/form_vol_passager_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitVol(e)}>
        Valider date
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}

{isMobileOrTablet && <Container className=' justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white'}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    <Row className='justify-content-center  pb-2' >
        <Col xs={"auto"}>
        <Link to="/menu_passagers">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>
        </Col>
    </Row>
    
<Form>
   

    <Row className='justify-content-center'>
        <Col xs={6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateType"  type="date" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>

  
    <Row className='justify-content-center pb-3'>
        <Col xs={6}>
        
        <Link to="/form_vol_passager_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitVol(e)}>
        Valider date
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}

<Footer />
</>
    )
}


export default FormDateVolPassager;