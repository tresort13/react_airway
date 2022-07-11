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



function VolBagagePageInfo(props)
{

    const[bagageData,setBagageData] = useState([])
     
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });
       
    const message = ()=>
    {
        alert(" désolé la page d'impression n'est pas encore disponible")
    }


const updateAutoBagage = ()=>
{
    fetch('http://localhost:8000/api/volBagageAutoQuery/'+props.volInfo+'/', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                //body: JSON.stringify(props.barcodeInfo)
              })
              .then( res => res.json())
              .then(
                res => {   
                    setBagageData(res) 
                    console.log(res)        
                }
              )
              .catch( (error) =>
                {
                    console.error(error)
                    console.log(props.volInfo)
                } )

}

  useEffect(()=>
    {
       const interval =  setInterval(()=>updateAutoBagage(),1000);
        return () => clearInterval(interval)
    },[props.volInfo])
 
  
    return (
        <>
          <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center borders' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={6}>
          <Link to="/form_vol_bagage_info">
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
       
           
            
        
        <li><b><i>Nombres des bagages enregistrés après checkin : </i></b><i className='couleur'><b> {
           bagageData.reduce((total,value)=>{
            total = total + parseInt(value.count_numero_barcode_bagage) 
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
        <h6 className='text-center'><u><b><i>NOMBRES DES BAGAGES SCANNES PAR POSTE (DEPART) </i></b></u></h6>
        <ul>
        <li><b><i> NombresBagage au fin tapis :</i></b> <i className='couleur text-success'><b>
            {
            bagageData.reduce((total,value)=>
            {
              total= total + parseInt(value.count_ok_bagage_fin_tapis)
              return total
            },0)
        }</b></i> </li>

        
        <li><b><i>Nombres Bagage au pied avion :</i></b> <i className='couleur text-success'><b>       
             {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_pied_avion)
              return total
            },0)
        }</b></i></li>

        
        <li><b><i>Nombres Bagage emplacement south A :</i></b> <i className='couleur text-success'><b>{
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_emplacement_south_A)
              return total
            },0)
        }</b></i> </li>
        
        <li><b><i>Nombres Bagage emplacement south B :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_emplacement_south_B)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres Bagage emplacement south C :</i></b> <i className='couleur text-success'><b>
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_emplacement_south_C)
              return total
            },0)
        }</b></i> </li>
       
       <li><b><i>Nombres Bagage embarqué :</i></b> <i className='couleur text-success'><b>       
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_embarquement_depart)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres Bagage debarqué :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_debarquement_depart)
              return total
            },0)
        }</b></i> </li>

        
        </ul>
        </div>
        </Col>
        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>NOMBRES DES BAGAGES SCANNES PAR POSTE (ARRIVEE) </i></b></u></h6>
        <ul>
        <li><b><i>Nombres Bagage debarqué :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_debarquement_arrivee)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres Bagage en tapis livraison :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_en_tapis_livraison)
              return total
            },0)
        }</b></i> </li>

       <li><b><i>Nombres Bagage livré au passager :</i></b> <i className='couleur text-success'><b>{
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_livrer)
              return total
            },0)
        }</b></i> </li>

        
        </ul>
        </div>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={message} >
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
          <Link to="/form_vol_bagage_info">
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
       
           
            
        
        <li><b><i>Nombres des bagages enregistrés après checkin : </i></b><i className='couleur'><b> {
           bagageData.reduce((total,value)=>{
            total = total + parseInt(value.count_numero_barcode_bagage) 
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
        <h6 className='text-center'><u><b><i>NOMBRES DES BAGAGES SCANNES PAR POSTE (DEPART) </i></b></u></h6>
        <ul>
        <li><b><i> NombresBagage au fin tapis :</i></b> <i className='couleur text-success'><b>
            {
            bagageData.reduce((total,value)=>
            {
              total= total + parseInt(value.count_ok_bagage_fin_tapis)
              return total
            },0)
        }</b></i> </li>

        
        <li><b><i>Nombres Bagage au pied avion :</i></b> <i className='couleur text-success'><b>       
             {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_pied_avion)
              return total
            },0)
        }</b></i></li>

        
        <li><b><i>Nombres Bagage emplacement south A :</i></b> <i className='couleur text-success'><b>{
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_emplacement_south_A)
              return total
            },0)
        }</b></i> </li>
        
        <li><b><i>Nombres Bagage emplacement south B :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_emplacement_south_B)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres Bagage emplacement south C :</i></b> <i className='couleur text-success'><b>
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_emplacement_south_C)
              return total
            },0)
        }</b></i> </li>
       
       <li><b><i>Nombres Bagage embarqué :</i></b> <i className='couleur text-success'><b>       
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_embarquement_depart)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres Bagage debarqué :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_debarquement_depart)
              return total
            },0)
        }</b></i> </li>

        
        </ul>
        </div>
        </Col>

    </Row>

    <Row>
    <Col xs = {12} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>NOMBRES DES BAGAGES SCANNES PAR POSTE (ARRIVEE) </i></b></u></h6>
        <ul>
        <li><b><i>Nombres Bagage debarqué :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_debarquement_arrivee)
              return total
            },0)
        }</b></i> </li>

        <li><b><i>Nombres Bagage en tapis livraison :</i></b> <i className='couleur text-success'><b>        
            {
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_en_tapis_livraison)
              return total
            },0)
        }</b></i> </li>

       <li><b><i>Nombres Bagage livré au passager :</i></b> <i className='couleur text-success'><b>{
            bagageData.reduce((total,value)=>
            {
              total = total + parseInt(value.count_ok_bagage_livrer)
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
        <Button variant="primary" type="submit" onClick={message} >
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

export default VolBagagePageInfo;