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




function FormTracerBaggages(props)
{
        const[operation,setOperation] = useState('')
        const[position,setPosition] = useState('')
        const[volInfo,setVolInfo] = useState('')

   

    const sendingData = ()=>
    {
      props.setOperationBG(operation)
      props.setPositionBG(position)
      props.setVolInfo(volInfo)
      
    }


const [volData,setVolData] = useState([])

const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });



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
            <Link to="/menu_bagages">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>

        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" >
        <Form.Select name='operation' value={operation} aria-label="Default select example" onChange={e=>setOperation(e.target.value)} required>
         <option>Selectionnez type operation</option>
         <option value="ok_bagage_checker_depart">Depart</option>
         <option value="ok_bagage_checker_arriver">Arrivee</option>
        </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
         <option>Selectionnez votre position</option>
         <option value="ok_bagage_fin_tapis">fin tapis</option>
         <option value="ok_pied_avion">Pied Avion</option>
         <option value="ok_bagage_emplacement_south_A">South A</option>
         <option value="ok_bagage_emplacement_south_B">South B</option>
         <option value="ok_bagage_emplacement_south_C">South C</option>
         <option value="ok_bagage_embarquement_depart">embarquement</option>
         <option value="ok_bagage_debarquement_depart">debarquement (depart)</option>
         <option value="ok_bagage_debarquement_arrivee">debarquement (arrivée)</option>
         <option value="ok_bagage_en_tapis_livraison">tapis livraison</option>
         <option value="ok_bagage_livrer">livrer bagage</option>
         <option value="ok_bagage_stocke_depart">stockage (lieu de depart)</option>
         <option value="ok_bagage_stocke_arrivee">stockage (lieu d'arriver)</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={volInfo} aria-label="Default select example" onChange={e=>setVolInfo(e.target.value)} required>
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
        
        <Link to="/scanning_baggages" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={sendingData} variant="primary" type="submit">
        démarrer operation
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}

{isMobileOrTablet && <Container className='mx-auto justify-content-center text-center bordure' style={{marginTop:25,backgroundColor:'white'}} >
   
<Row className='justify-content-center  pt-2' >
        <Col xs={"auto"}>
        <p><i><b>Veuillez selectionner les differentes options pour démarrer</b> </i></p>
        </Col>
    </Row>

    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
            <Link to="/menu_bagages">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>

        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" >
        <Form.Select name='operation' value={operation} aria-label="Default select example" onChange={e=>setOperation(e.target.value)} required>
         <option>Selectionnez type operation</option>
         <option value="ok_bagage_checker_depart">Depart</option>
         <option value="ok_bagage_checker_arriver">Arrivee</option>
        </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
         <option>Selectionnez votre position</option>
         <option value="ok_bagage_fin_tapis">fin tapis</option>
         <option value="ok_pied_avion">Pied Avion</option>
         <option value="ok_bagage_emplacement_south_A">South A</option>
         <option value="ok_bagage_emplacement_south_B">South B</option>
         <option value="ok_bagage_emplacement_south_C">South C</option>
         <option value="ok_bagage_embarquement_depart">embarquement</option>
         <option value="ok_bagage_debarquement_depart">debarquement (depart)</option>
         <option value="ok_bagage_debarquement_arrivee">debarquement (arrivée)</option>
         <option value="ok_bagage_en_tapis_livraison">tapis livraison</option>
         <option value="ok_bagage_livrer">livrer bagage</option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={volInfo} aria-label="Default select example" onChange={e=>setVolInfo(e.target.value)} required>
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
        
        <Link to="/scanning_baggages" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={sendingData} variant="primary" type="submit">
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

export default FormTracerBaggages;