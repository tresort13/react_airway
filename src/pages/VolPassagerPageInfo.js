import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  './Login.css';
import './PageInfo.css';
import {Link} from  'react-router-dom';
import { useEffect,useState } from 'react';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';



function VolPassagerPageInfo(props)
{

    const[passagerData,setPassagerData] = useState([])

    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });    
        

const updateAutoPassager = ()=>
{
    fetch('http://localhost:8000/api/volPassagerAutoQuery/'+props.volInfo+'/', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                //body: JSON.stringify(props.barcodeInfo)
              })
              .then( res => res.json())
              .then(
                res => {   
                    setPassagerData(res) 
                    console.log(res)        
                }
              )
              .catch( (error) =>
                {
                    console.error(error)
                    console.log(props.volInfo)
                } )

}
const message = ()=>
{
    alert(" désolé la page d'impression n'est pas encore disponible")
}

  useEffect(()=>
    {
       const interval =  setInterval(()=>updateAutoPassager(),1000);
        return () => clearInterval(interval)
    },[props.volInfo])
   const result = 0; 
  
    return (
        <>
          <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center borders' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={6}>
          <Link to="/form_vol_passager_info">
          <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
          </Link>

        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
        <h6 className='text-center'><u><b><i>INFORMATIONS SUR LE VOL</i></b></u></h6>
        <ul>
        <li><b><i>Vol : </i></b><i className='couleur' ><b>{props.volInfo}</b> </i></li>
       
        <li><b><i>Nombres des Passagers enregistrés après checkin : </i></b><i className='couleur'><b> {
           passagerData.reduce((total,value)=>{
            total = total + parseInt(value.count_numero_barcode_passager) 
            return total 
          },0)
        }</b></i></li>
        </ul>
        
        </div>
        </Col>
    </Row>
    <Row >

        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>NOMBRES DES PASSAGERS SCANNES PAR POSTE (DEPART) </i></b></u></h6>
        <ul>
        <li><b><i>Nombres des passagers en salle DGM :</i></b> <i className='text-success'><b>
            {
            passagerData.reduce((total,value)=>
            {
              total= total + parseInt(value.count_ok_passager_localisation_dgm)
              return total
            },0)
        }</b></i> </li>

        
        <li><b><i>Nombres des passagers en salle d'attente :</i></b> <i className='text-success'><b>       
             {
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_localisation_salle_attente)
              return total
            },0)
        }</b></i></li>

        
        <li><b><i>Nombres des passagers en embarquement de l'avion:</i></b> <i className='text-success'><b>{
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_embarquement_avion)
              return total
            },0)
        }</b></i> </li>
        
       

        
        </ul>
        </div>
        </Col>
        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>NOMBRES DES PASSAGERS SCANNES PAR POSTE (ARRIVEE) </i></b></u></h6>
        <ul>
        <li><b><i>Nombres des passagers débarqués en destination :</i></b> <i className='text-success'><b>        
            {
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_debarquement_avion)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres des passagers ayant récuperés leurs bagages :</i></b> <i className='text-success'><b>        
            {
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_arriver_et_recuperer_baggage)
              return total
            },0)
        }</b></i> </li>

       

        
        </ul>
        </div>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={"auto"} >
        
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={message}>
        Imprimer informations
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center borders mb-5' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={"auto"}>
          <Link to="/form_vol_passager_info">
          <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
          </Link>

        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
        <h6 className='text-center'><u><b><i>INFORMATIONS SUR LE VOL</i></b></u></h6>
        <ul>
        <li><b><i>Vol : </i></b><i className='couleur' ><b>{props.volInfo}</b> </i></li>
       
        <li><b><i>Nombres des Passagers enregistrés après checkin : </i></b><i className='couleur'><b> {
           passagerData.reduce((total,value)=>{
            total = total + parseInt(value.count_numero_barcode_passager) 
            return total 
          },0)
        }</b></i></li>
        </ul>
        </div>
        </Col>
    </Row>
    <Row >

        <Col xs = {12} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>NOMBRES DES PASSAGERS SCANNES PAR POSTE (DEPART) </i></b></u></h6>
        <ul>
        <li><b><i>Nombres des passagers en salle DGM :</i></b> <i className='text-success'><b>
            {
            passagerData.reduce((total,value)=>
            {
              total= total + parseInt(value.count_ok_passager_localisation_dgm)
              return total
            },0)
        }</b></i> </li>

        
        <li><b><i>Nombres des passagers en salle d'attente :</i></b> <i className='text-success'><b>       
             {
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_localisation_salle_attente)
              return total
            },0)
        }</b></i></li>

        
        <li><b><i>Nombres des passagers en embarquement de l'avion:</i></b> <i className='text-success'><b>{
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_embarquement_avion)
              return total
            },0)
        }</b></i> </li>
        
       

        
        </ul>
        </div>
        </Col>
        <Col xs = {12} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>NOMBRES DES PASSAGERS SCANNES PAR POSTE (ARRIVEE) </i></b></u></h6>
        <ul>
        <li><b><i>Nombres des passagers débarqués en destination :</i></b> <i className='text-success'><b>        
            {
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_debarquement_avion)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres des passagers ayant récuperés leurs bagages :</i></b> <i className='text-success'><b>        
            {
            passagerData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_passager_arriver_et_recuperer_baggage)
              return total
            },0)
        }</b></i> </li>

       

        
        </ul>
        </div>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={"auto"} >
        
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={message}>
        Imprimer informations
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>
</Container>}

<Footer />
   </>
  )
}

export default VolPassagerPageInfo;