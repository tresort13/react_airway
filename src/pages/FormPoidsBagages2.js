import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  './Login.css';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';


const useState = React.useState
function FormPoidsBaggages(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:"",
        poids_bagage:"",

    }})

    const [message,setMessage] = useState("veuillez enregistrer le poids du bagage numerique ")
    const [couleur,setCouleur] = useState("text-dark")
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitBarcode = (e)=>
    {
        
        e.preventDefault()
        
        fetch('http://localhost:8000/api/updatePoidsBagage/', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(barcode.infoBarcode)
              })
              .then( res => res.json())
              .then(
                res => {   
                    if(res =="ok")
                {
                    navigate('/form_poids_bagages')
                    setMessage("poids enregistré avec succès !!!")
                    setCouleur("text-success")
                } 
                else{
                    setMessage("echec operation")
                    setCouleur("text-danger")
                }
       
                }
              )
              .catch( (error) =>
                {
                    
                    setMessage("echec d'enregistrement du poids du bagage")
                    setCouleur("text-danger")
                    
                } )

                console.log(barcode.infoBarcode.operation +" "+barcode.infoBarcode.position)
                
                
               // setBarcode({infoBarcode:{barcodeBagage:""}})  
                e.target.disabled = false
    }

    const inputChanged = (event)=>
    {
        const cred = barcode.infoBarcode;
        cred[event.target.name] = event.target.value;
        cred['barcodeBagage'] = props.barcodeInfo
        setBarcode({infoBarcode:cred})
        event.target.disabled = true
    }

    

   
    return (
        <>
<Header />
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white',width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={6}>
            <Link to="/form_poids_bagages">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control  name="poids_bagage" value={barcode.infoBarcode.poids_bagage} onChange={e=>inputChanged(e)} type="text" placeholder="Poids baggage" autoFocus required />
         </Form.Group>
        </Col>
    </Row>

    
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        Enregistrer poids bagage
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
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Poids baggage" autoFocus required/>
         </Form.Group>
        </Col>
    </Row>


  
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}>
        Enregistrer poids bagage
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