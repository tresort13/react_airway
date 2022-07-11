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
import { useMediaQuery } from 'react-responsive'
import Footer from './Footer';



const useState = React.useState
function FormInformationBaggage(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    const submitBarcode = ()=>
    {
        
        
        fetch('http://localhost:8000/api/bagageInformation/', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(barcode.infoBarcode)
              })
              .then( res => res.json())
              .then(
                res => {   
                    console.log(res) 
                    props.setBarcodeInfo(barcode.infoBarcode.barcodeBagage)        
                }
              )
              .catch( (error) =>
                {
                    console.error(error)
                } )

                setBarcode({infoBarcode:{barcodeBagage:""}})
    }

    const inputChanged = (event)=>
    {
         const cred = barcode.infoBarcode;
         cred[event.target.name] = event.target.value;
         setBarcode({infoBarcode:cred})
    }


    return (
        <>
        <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:100,backgroundColor:'white',width:750}} >

<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={6}>
        <p><i>Veuillez entrer le barcode du bagage</i></p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-2' >
        <Col xs={6}>
            <Link to="/menu_bagages">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>

        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez entrer le barcode du baggage" autoFocus/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={2}>
        
        <Link to="/bagage_page_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={submitBarcode}>
        validation
        </Button>
        </Link>

        </Col>
    </Row>
  


</Form>
</Container>}

{isMobileOrTablet && <Container className='mx-auto justify-content-center text-center bordure' style={{marginTop:100,backgroundColor:'white'}} >

<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={"auto"}>
        <p><i>Veuillez entrer le barcode du bagage</i></p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-2' >
        <Col xs={"auto"}>
            <Link to="/menu_bagages">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>

        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez entrer le barcode du baggage" autoFocus/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/bagage_page_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={submitBarcode}>
        validation
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

export default FormInformationBaggage;