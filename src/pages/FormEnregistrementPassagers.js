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
function FormEnregistrementPassagers(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodePassager:"",
        volInfo:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    const[volInfo,setVolInfo] = useState('')


    const [message,setMessage] = useState("Veuillez scanner le barcode pour enregistrer le passager")
    const [couleur,setCouleur] = useState("text-dark")

    const submitBarcode = (e)=>
    {
        
        e.preventDefault()
        
        fetch('http://localhost:8000/api/passagerInformation/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(barcode.infoBarcode)
              })
              .then( res => res.json())
              .then(
                res => {   
                    if(res =="ok")
                {
                    
                    setMessage("le barcode" +barcode.infoBarcode.barcodePassager+" est enregistré avec succès !!!")
                    setCouleur("text-success")
                } 
                else{
                    setMessage("echec enregistrement")
                    setCouleur("text-danger")
                }        
                }
              )
              .catch( (error) =>
                {
                    console.log("le barcode est déjà enregistré")
                } )

                setBarcode({infoBarcode:{barcodePassager:""}})
    }

    const inputChanged = (event)=>
    {
        const cred = barcode.infoBarcode;
        cred[event.target.name] = event.target.value;
        cred['volInfo'] = props.volInfo
        setBarcode({infoBarcode:cred})
    }


    return (
        <>
        <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:100,backgroundColor:'white',width:750}} >

<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={6}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-2' >
        <Col xs={6}>
        <Link to="/vol_select_passager">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>

        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodePassager" value={barcode.infoBarcode.barcodePassager} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez entrer le barcode du passager" autoFocus/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={2}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        scanner
        </Button>
        </Link>

        </Col>
    </Row>
  


</Form>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center bordure' style={{marginTop:100,backgroundColor:'white'}} >

<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-2' >
        <Col xs={"auto"}>
        <Link to="/vol_select_passager">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>

        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodePassager" value={barcode.infoBarcode.barcodePassager} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez entrer le barcode du passager" autoFocus/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        scanner
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

export default FormEnregistrementPassagers;