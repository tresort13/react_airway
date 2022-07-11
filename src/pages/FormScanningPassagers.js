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


const useState = React.useState
function FormScanningPassagers(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodePassager:"",
        operation:"",
        position:"",
        volInfo:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

    const [message,setMessage] = useState("veuillez scanner le barcode du passager ")
    const submitBarcode = (e)=>
    {
        
        e.preventDefault()
        
        fetch('http://localhost:8000/api/updatePassager/', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(barcode.infoBarcode)
              })
              .then( res => res.json())
              .then(
                res => {   
                    setMessage(res)          
                }
              )
              .catch( (error) =>
                {
                    setMessage("c'est barcode n'est pas enregistré veuillez l'enregistré dans l'option *enregistrer barcode passager*")  
                } )

                console.log(barcode.infoBarcode.operation +" "+barcode.infoBarcode.position)

                setBarcode({infoBarcode:{barcodePassager:""}})
    }

    const inputChanged = (event)=>
    {
        const cred = barcode.infoBarcode;
        cred[event.target.name] = event.target.value;
        cred['operation'] = props.operationBG
        cred['position'] = props.positionBG
        cred['volInfo'] = props.volInfo
         setBarcode({infoBarcode:cred})
    }


    return (
        <>

{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white',width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p><i>{message}</i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={6}>
            <Link to="/tracer_passagers">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodePassager" value={barcode.infoBarcode.barcodePassager} onChange={e=>inputChanged(e)}  type="text" placeholder="Veuillez scanner le barcode passager" autoFocus/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        tracker passager
        </Button>
        </Link>

        </Col>
    </Row>
  


</Form>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white'}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p><i>{message}</i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={"auto"}>
            <Link to="/tracer_passagers">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodePassager" value={barcode.infoBarcode.barcodePassager} onChange={e=>inputChanged(e)}  type="text" placeholder="Veuillez scanner le barcode passager" autoFocus/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        tracker passager
        </Button>
        </Link>

        </Col>
    </Row>
  


</Form>
</Container>}
</>
)
}

export default FormScanningPassagers;