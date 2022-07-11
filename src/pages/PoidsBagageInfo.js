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


function PoidsBagageInfo(props)
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

    
  const total_poids_tarmaque = bagageData.reduce((total,value)=>{
    total = total + parseInt(value.kilos_bagage_tarmaque) 
    return total 
  },0)

  const total_poids_manifest = bagageData.reduce((total,value)=>{
    total = total + parseInt(JSON.stringify(value.bagage_weight_info).trim().slice(3,5)) 
    return total 
  },0)

  const total_poids_difference = total_poids_tarmaque - total_poids_manifest

  
    return (
        <>
        <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center borders' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={6}>
          <Link to="/form_vol_poids_info">
          <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
          </Link>

        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6><u><b><i>INFORMATIONS SUR LE VOL</i></b></u></h6>
    
        <li><b><i>Informations sur le Vol : </i></b><i className='couleur' ><b>{props.volInfo}</b> </i></li>
           
        </div>
        </Col>
    </Row>
    <Row >

        <Col xs = {6} className='text-center borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>TOTAL DES POIDS DES BAGAGES (TARMAQUE) </i></b></u></h6>
        <ul>
        

        <li><b><i>Total poids bagages au tarmaque : </i></b> <i className='text-success'><b>{total_poids_tarmaque} kg</b></i> </li>
        
        </ul>
        </div>
        </Col>
        <Col xs = {6} className='text-center borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>TOTAL DES POIDS DES BAGAGES (MANIFEST) </i></b></u></h6>
        <ul>

       <li><b><i>Total poids bagages du manifest :</i></b> <i className='text-success'><b>{total_poids_manifest} kg</b></i> </li>
 
        </ul>
        </div>
        </Col>
    </Row>
  
    <Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6><u><b><i>DIFFERENCE TOTAL DES POIDS</i></b></u></h6>
    
        <li><b><i>Difference total (t.p.tarmaque - t.p.manifest) : </i></b><i className='text-danger' ><b>{total_poids_difference} kg</b> </i></li>
           
        </div>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={"auto"} >
        
        <Link to="/detail_anomalie_poids_bagage" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" >
        Voir les informations des bagages ayant des anomalies des poids
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
           
         </ul>
        </div>
        </Col>
    </Row>
    <Row >

    <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>TOTAL DES POIDS DES BAGAGES (TARMAQUE) </i></b></u></h6>
        <ul>
        

        <li><b><i>Total poids bagages au tarmaque : </i></b> <i className='text-danger'><b>{total_poids_tarmaque} kg</b></i> </li>
        
        </ul>
        </div>
        </Col>
        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>TOTAL DES POIDS DES BAGAGES (MANIFEST) </i></b></u></h6>
        <ul>

       <li><b><i>Total poids bagages du manifest :</i></b> <i className='text-danger'><b>{total_poids_manifest} kg</b></i> </li>
 
        </ul>
        </div>
        </Col>
    </Row>
  
    <Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
        <h6><u><b><i>DIFFERENCE TOTAL DES POIDS</i></b></u></h6>
    
        <li><b><i>Difference total (t.p.tarmaque - t.p.manifest) : </i></b><i className='couleur' ><b>{total_poids_difference} kg</b> </i></li>
           
        </div>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={"auto"} >
        
        <Link to="/bagage_non_livres" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" >
        Voir les informations des bagages ayant des anomalies des poids
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

export default PoidsBagageInfo;