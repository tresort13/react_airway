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
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';


function BagagesNonLivresInfo(props)
{

    const[bagageData,setBagageData] = useState([])
             
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
      });
  const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
      });    


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

    
  const nb_bg = bagageData.reduce((total,value)=>{
    total = total + parseInt(value.count_numero_barcode_bagage) 
    return total 
  },0)

  const nb_bg_livrer = bagageData.reduce((total,value)=>{
    total = total + parseInt(value.count_ok_bagage_livrer) 
    return total 
  },0)

  const nb_debarquer = bagageData.reduce((total,value)=>
  {
    total = total + parseInt(value.count_ok_bagage_debarquement_depart)
    return total
  },0)

  const nb_debarquer_arrivee = bagageData.reduce((total,value)=>{
    total = total + parseInt(value.count_ok_bagage_debarquement_arrivee) 
    return total 
  },0)

  const nb_embarquer = bagageData.reduce((total,value)=>
  {
    total = total + parseInt(value.count_ok_bagage_embarquement_depart)
    return total
  },0)

  const nb_non_embarquer = (nb_bg - nb_embarquer) + nb_debarquer
  const nb_non_livrer_tapis = nb_debarquer_arrivee - nb_bg_livrer
  
  const nb_non_livrer = nb_non_embarquer + nb_non_livrer_tapis 


    return (
        <>
        <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center borders' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={6}>
          <Link to="/form_vol_select_non_livre">
          <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
          </Link>

        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
        <h6><u><b><i>INFORMATIONS SUR LE VOL</i></b></u></h6>
    
        <li><b><i>Informations sur le Vol : </i></b><i className='couleur' ><b>{props.volInfo}</b> </i></li>
           
        
        <li><b><i>Nombres total des bagages à livrer  : </i></b><i className='couleur'><b> {nb_bg}</b></i></li>

         <li><b><i>Nombres total des bagages  livrés  : </i></b><i className='couleur text-success'><b> {nb_bg_livrer}</b></i></li>

         <li><b><i>Nombres total des bagages non livrer  : </i></b><i className='couleur text-danger'><b> {nb_non_livrer}</b></i></li>   
        </div>
        </Col>
    </Row>
    <Row >

        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>CAUSES DE NON LIVRAISON (EN DEPART) </i></b></u></h6>
        <ul>
        

        <li><b><i>Nombres des bagages non embarqués après décollage avion:</i></b> <i className='text-danger'><b>{nb_non_embarquer}</b></i> </li>
        
        </ul>
        </div>
        </Col>
        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>CAUSES DE NON LIVRAISON (EN ARRIVEE) </i></b></u></h6>
        <ul>

       <li><b><i>Nombres des bagages non récuperés par les passagers en tapis livraison :</i></b> <i className='text-danger'><b>{nb_non_livrer_tapis}</b></i> </li>
 
        </ul>
        </div>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        
        <Link to="/bagage_non_livres" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" >
        Voir les informations des bagages non livrés
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center borders mb-5' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={"auto"}>
          <Link to="/form_vol_select_non_livre">
          <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
          </Link>

        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
          <ul>
        <h6 className='text-center'><u><b><i>INFORMATIONS SUR LE VOL</i></b></u></h6>
    
        <li><b><i>Informations sur le Vol : </i></b><i className='couleur' ><b>{props.volInfo}</b> </i></li>
           
        
        <li><b><i>Nombres total des bagages à livrer  : </i></b><i className='couleur'><b> {nb_bg}</b></i></li>

         <li><b><i>Nombres total des bagages  livrés  : </i></b><i className='couleur text-success'><b> {nb_bg_livrer}</b></i></li>

         <li><b><i>Nombres total des bagages non livrer  : </i></b><i className='couleur text-danger'><b> {nb_non_livrer}</b></i></li>   
         </ul>
        </div>
        </Col>
    </Row>
    <Row >

        <Col xs = {12} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>CAUSES DE NON LIVRAISON (EN DEPART) </i></b></u></h6>
        <ul>
        

        <li><b><i>Nombres des bagages non embarqués après décollage avion:</i></b> <i className='text-danger'><b>{nb_non_embarquer}</b></i> </li>
        
        </ul>
        </div>
        </Col>
        <Col xs = {12} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>CAUSES DE NON LIVRAISON (EN ARRIVEE) </i></b></u></h6>
        <ul>

       <li><b><i>Nombres des bagages non récuperés par les passagers en tapis livraison :</i></b> <i className='text-danger'><b>{nb_non_livrer_tapis}</b></i> </li>
 
        </ul>
        </div>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={"auto"} >
        
        <Link to="/bagage_non_livres" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" >
        Voir les informations des bagages non livrés
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

export default BagagesNonLivresInfo;