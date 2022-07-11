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
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';


const useState = React.useState
function FormPoidsBaggages(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:"",
    }})

    const [message,setMessage] = useState("veuillez scanner le barcode du bagage à enregistrer le poids ")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitBarcode = (e)=>
    {
        props.setBarcodeInfo(barcode.infoBarcode.barcodeBagage)
    }

    const inputChanged = (event)=>
    {
        const cred = barcode.infoBarcode;
        cred[event.target.name] = event.target.value;
        setBarcode({infoBarcode:cred})
    }

    

   
    return (
        <>
<Header username={props.username} />
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white',width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={6}>
            <Link to="/menu_gestion_vols">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez scanner le barcode baggage" autoFocus required/>
         </Form.Group>
        </Col>
    </Row>

    
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/form_poids_bagages2" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        tracker bagage
        </Button>
        </Link>

        </Col>
    </Row>
  


</Form>
</Container>}

{isMobileOrTablet && <Container className='mx-auto justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white'}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={"auto"}>
            <Link to="/tracer_baggages">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez scanner le barcode baggage" autoFocus required/>
         </Form.Group>
        </Col>
    </Row>


  
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/form_poids_bagages2" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        valider barcode
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

export default FormPoidsBaggages;