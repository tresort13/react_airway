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
function FormEnregistrementVol(props)
{
    const[vol,setVol] = useState({infoVol :{
        volDestination:"",
        volTypeAvion:"",
        volTime:"",
        dateType:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Veuillez enregistrer le vol d'aujourd'hui")
    const [couleur,setCouleur] = useState("text-dark")
    const submitVol = (e)=>
    {
        
        e.preventDefault()
        
        fetch('http://localhost:8000/api/volInformation/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(vol.infoVol)
              })
              .then( res => res.json())
              .then(
                res => {   
                   
                    if(res=="ok")
                    {
                    setMessage("le vol " +vol.infoVol.volDestination+" " +vol.infoVol.volTime+" est enregistré avec succès !!!")
                    setCouleur("text-success")
                    } 
                    else{
                        setMessage("echec d'enregistrement du vol " +vol.infoVol.volDestination+" " +vol.infoVol.volTime+" " +vol.infoVol.dateType+"!! ")
                    setCouleur("text-danger")
                    }        
                }
              )
              .catch( (error) =>
                {
                    console.error(error)
                    setMessage("veuillez selectionner les opions ci-dessous !!!")
                    setCouleur("text-danger")
                } )

                
                
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
        <Link to="/menu_gestion_vols">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" >
        <Form.Select name="volDestination" aria-label="Default select example" onChange={e=>inputChanged(e)}>
         <option>Selectionnez Destionation</option>
         <option value="KIN - GOM">KIN - GOM</option>
         <option value="KIN - LUM">KIN - LUM</option>
         <option value="LUM - MBU">LUM - MBU</option>
         <option value="LUM - BOM">LUM - BOM</option>
        </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Select name="volTypeAvion" aria-label="Default select example" onChange={e=>inputChanged(e)}>
         <option>Selectionnez Avion(Aircraft)</option>
         <option value="Airbus A320, 9S-ALU">Airbus A320, 9S-ALU </option>
         <option value="Boing B240, 7S-LUM">Boing B240, 7S-LUM </option>
         <option value="Airbus A380, 2S-TSH">Airbus A380, 2S-TSH </option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateType"  type="date" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="volTime"  type="time" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitVol(e)}>
        Enregistre vol
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
        <Link to="/menu_gestion_vols">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={6}>
        <Form.Group className="mb-3" >
        <Form.Select name="volDestination" aria-label="Default select example" onChange={e=>inputChanged(e)}>
         <option>Selectionnez Destionation</option>
         <option value="KIN - GOM">KIN - GOM</option>
         <option value="KIN - LUM">KIN - LUM</option>
         <option value="LUM - MBU">LUM - MBU</option>
         <option value="LUM - BOM">LUM - BOM</option>
        </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs={6}>
        <Form.Group className="mb-3" >
        <Form.Select name="volTypeAvion" aria-label="Default select example" onChange={e=>inputChanged(e)}>
         <option>Selectionnez Avion(Aircraft)</option>
         <option value="Airbus A320, 9S-ALU">Airbus A320, 9S-ALU </option>
         <option value="Boing B240, 7S-LUM">Boing B240, 7S-LUM </option>
         <option value="Airbus A380, 2S-TSH">Airbus A380, 2S-TSH </option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs={6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateType"  type="date" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs={6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="volTime"  type="time" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs={6}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitVol(e)}>
        Enregistre vol
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


export default FormEnregistrementVol;