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
function FormEnregistrementBagages(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:"",
        volInfo:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });


    const [message,setMessage] = useState("Veuillez scanner le barcode pour enregistrer le bagage")
    const [couleur,setCouleur] = useState("text-dark")

    
    
    const submitBarcode = (e)=>
    {
    


        fetch('http://localhost:8000/api/bagageInformation/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(barcode.infoBarcode)
              })
              .then( res => res.json())
              .then(
                res => {  
                    if(res =="ok")
                {
                    
                    setMessage("le barcode" +barcode.infoBarcode.barcodeBagage+" est enregistré avec succès !!!")
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
                    console.error(error)
                    setMessage("veuillez re-essayer l'enregistrement en suivant la procécedure!!")
                    setCouleur("text-danger")
                } )
       
                

                setBarcode({infoBarcode:{barcodeBagage:""}})
            
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
            <Link to="/vol_select_bagage">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form  >
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3 " controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez entrer le barcode du baggage" autoFocus required/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}  >
        Enregistre barcode
        </Button>

       
        </Col>
    </Row>
  


</Form>
</Container>}

{isMobileOrTablet && <Container className='mx-auto justify-content-center text-center bordure' style={{marginTop:100,backgroundColor:'white'}} >

<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-2' >
        <Col xs={"auto"}>
            <Link to="/vol_select_bagage">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form  >
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3 " controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Veuillez entrer le barcode du baggage" autoFocus required/>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}> 
        
        <Button variant="primary" type="submit" onClick={e=>submitBarcode(e)}  >
        Enregistre barcode
        </Button>

       
        </Col>
    </Row>
  


</Form>
</Container>}
<Footer />
</>
    )
}

export default FormEnregistrementBagages;