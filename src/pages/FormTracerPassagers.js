import React,{ useEffect,useState } from 'react';
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




function FormTracerPassagers(props)
{
    const[operation,setOperation] = useState('')
    const[position,setPosition] = useState('')
    const[volInfo,setVolInfo] = useState('')

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const sendingData = ()=>
    {
      props.setOperationBG(operation)
      props.setPositionBG(position)
      props.setVolInfo(volInfo)
      
    }

    const [volData,setVolData] = useState([])

    const autoVolInfo = ()=>
    {
        fetch('http://localhost:8000/api/volAutoQuery/', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    //body: JSON.stringify(props.barcodeInfo)
                  })
                  .then( res => res.json())
                  .then(
                    res => {   
                        setVolData(res)
                               
                    }
                  )
                  .catch( (error) =>
                    {
                        console.error(error)
                    } )
    
    }
    
      useEffect(()=>
        {
           const interval =  setInterval(()=>autoVolInfo(),1000);
            return () => clearInterval(interval)
        },[])
    

return (
    <>

{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:25,backgroundColor:'white',width:750}} >
    
<Row className='justify-content-center  pt-2' >
        <Col xs={6}>
        <p><i><b>Veuillez selectionner les differentes options pour démarrer</b> </i></p>
        </Col>
    </Row>
    <Row className='justify-content-center mb-5 pt-3' >
        <Col xs={6}>
            <Link to="/menu_passagers">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" >
        <Form.Select name="operation" aria-label="Default select example" onChange={e=>setOperation(e.target.value)}>
         <option>Selectionnez type operation</option>
         <option value="ok_passager_checker_depart">Depart</option>
         <option value="ok_passager_checker_arriver">Arrivee</option>
        </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Select name="position" aria-label="Default select example" onChange={e=>setPosition(e.target.value)}>
         <option>Selectionnez votre position</option>
         <option value="ok_passager_localisation_dgm">Salle DGM </option>
         <option value="ok_passager_localisation_salle_attente">Salle d'attente</option>
         <option value="ok_passager_embarquement_avion">embarquer</option>
         <option value="ok_passager_debarquement_avion">debarquer</option>
         <option value="ok_passager_arriver_et_recuperer_baggage">Bagage livré </option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={volInfo} aria-label="Default select example" onChange={e=>setVolInfo(e.target.value)}>
         <option>Selectionnez vol d'operation</option>
         {volData.map((donnes)=>{
          return <option value={donnes.flight_info}>{donnes.flight_info}</option>
         })}
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/scanning_passagers" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={sendingData}>
        démarrer operation
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center bordure' style={{marginTop:25,backgroundColor:'white'}} >
    
<Row className='justify-content-center  pt-2' >
        <Col xs={"auto"}>
        <p><i><b>Veuillez selectionner les differentes options pour démarrer</b> </i></p>
        </Col>
    </Row>
    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
            <Link to="/menu_passagers">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" >
        <Form.Select name="operation" aria-label="Default select example" onChange={e=>setOperation(e.target.value)}>
         <option>Selectionnez type operation</option>
         <option value="ok_passager_checker_depart">Depart</option>
         <option value="ok_passager_checker_arriver">Arrivee</option>
        </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" >
        <Form.Select name="position" aria-label="Default select example" onChange={e=>setPosition(e.target.value)}>
         <option>Selectionnez votre position</option>
         <option value="ok_passager_localisation_dgm">Salle DGM </option>
         <option value="ok_passager_localisation_salle_attente">Salle d'attente</option>
         <option value="ok_passager_embarquement_avion">embarquer</option>
         <option value="ok_passager_debarquement_avion">debarquer</option>
         <option value="ok_passager_arriver_et_recuperer_baggage">Bagage livré </option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={volInfo} aria-label="Default select example" onChange={e=>setVolInfo(e.target.value)}>
         <option>Selectionnez vol d'operation</option>
         {volData.map((donnes)=>{
          return <option value={donnes.flight_info}>{donnes.flight_info}</option>
         })}
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/scanning_passagers" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={sendingData}>
        démarrer operation
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}
</>
    )
}

export default FormTracerPassagers;