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



function BagagePageInformation(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

    const[infoBagage,setInfoBagage] = useState({bagage_info:{
        numero_barcode_bagage :"",
        passenger_and_ticket_info : "",
        pnr_and_bagage_info :"",
        bagage_weight_info :"",
        flight_info :"",
        avion_info:"",
        ok_bagage_fin_tapis :"",
        ok_pied_avion :"",
        ok_bagage_embarquement :"",
        ok_bagage_emplacement_south_A:"",
        ok_bagage_emplacement_south_B :"",
        ok_bagage_emplacement_south_C:"",
        ok_bagage_debarquement :"",
        ok_bagage_checker_depart :"",
        ok_bagage_checker_arriver :"",
        ok_bagage_en_tapis_livraison:"",
        ok_bagage_livrer :"",
        ok_bagage_stocke_depart : "",
        ok_bagage_stocke_arrivee :"",
        kilos_bagage_tarmaque :"",
        date_heure_operation :"",
        date_operation:"",
        agent_id_save:""
        }})
        
        const bagageData = (res)=>
        {
          setInfoBagage({
            bagage_info:{
              numero_barcode_bagage :res.numero_barcode_bagage,
              passenger_and_ticket_info : res.passenger_and_ticket_info,
              pnr_and_bagage_info :res.pnr_and_bagage_info,
              bagage_weight_info :res.bagage_weight_info,
              flight_info :res.flight_info,
              avion_info :res.avion_info,
              ok_bagage_fin_tapis :res.ok_bagage_fin_tapis,
              ok_pied_avion :res.ok_pied_avion ,
              ok_bagage_embarquement_depart :res.ok_bagage_embarquement_depart,
              ok_bagage_emplacement_south_A:res.ok_bagage_emplacement_south_A,
              ok_bagage_emplacement_south_B :res.ok_bagage_emplacement_south_B,
              ok_bagage_emplacement_south_C:res.ok_bagage_emplacement_south_C,
              ok_bagage_debarquement_depart :res.ok_bagage_debarquement_depart,
              ok_bagage_debarquement_arrivee :res.ok_bagage_debarquement_arrivee,
              ok_bagage_checker_depart :res.ok_bagage_checker_depart,
              ok_bagage_checker_arriver :res.ok_bagage_checker_arriver,
              ok_bagage_en_tapis_livraison:res.ok_bagage_en_tapis_livraison,
              ok_bagage_livrer :res.ok_bagage_livrer,
              ok_bagage_stocke_depart : res.ok_bagage_stocke_depart,
              ok_bagage_stocke_arrivee :res.ok_bagage_stocke_arrivee,
              kilos_bagage_tarmaque :res.kilos_bagage_tarmaque,
              date_heure_operation :res.date_heure_operation ,
              date_operation:res.date_operation,
              agent_id_save:res.agent_id_save
          }})
        }

const message = ()=>
{
    alert(" désolé la page d'impression n'est pas encore disponible")
}

const updateAutoBagage = ()=>
{
    fetch('http://localhost:8000/api/bagageAutoQuery/'+props.barcodeInfo+'/', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                //body: JSON.stringify(props.barcodeInfo)
              })
              .then( res => res.json())
              .then(
                res => {   
                    bagageData(res)         
                }
              )
              .catch( (error) =>
                {
                    console.error(error)
                    console.log(props.barcodeInfo)
                } )

}

  useEffect(()=>
    {
       const interval =  setInterval(()=>updateAutoBagage(),1000);
        return () => clearInterval(interval)
    },[props.barcodeInfo])
    
    const kgt = parseInt(infoBagage.bagage_info.kilos_bagage_tarmaque)
    const kgm = parseInt(JSON.stringify(infoBagage.bagage_info.bagage_weight_info).trim().slice(3,5))
    const kilosDifference = kgt - kgm
  
    return (
        <>
        <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center borders mb-5' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={6}>
            <Link to="/form_baggage_info">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
        <h6><u><b><i>INFORMATIONS PROPRITAIRE BAGAGE</i></b></u></h6>
        <li><b><i>Noms Propritaire : </i></b><i className='couleur' ><b>{JSON.stringify(infoBagage.bagage_info.passenger_and_ticket_info).trim().slice(16,50)}</b> </i></li>
        <li><b><i>Code PNR Passager : </i></b><i className='couleur'><b>{JSON.stringify(infoBagage.bagage_info.pnr_and_bagage_info).trim().slice(3,9)}</b></i></li>
        <li><b><i>Informations sur le vol : </i></b><i className='couleur' ><b>{JSON.stringify(infoBagage.bagage_info.flight_info).trim().slice(3,49)}</b></i></li>
        <li><b><i>Informations sur l'avion : </i></b><i className='couleur' ><b>{JSON.stringify(infoBagage.bagage_info.avion_info).trim().slice(3,38)}</b></i></li>
        </div>
        </Col>
    </Row>
    <Row >

        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>INFORMATIONS STATUS LIEU DEPART </i></b></u></h6>
        <ul>
        <li ><b><i>operation vol en depart  :</i></b> <i  className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_checker_depart}</b></i></li>
        <li ><b><i>Bagage au fin tapis :</i></b> <i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_fin_tapis}</b></i> </li>
        <li ><b><i>Bagage au pied avion :</i></b> <i className='couleur text-success'><b>{infoBagage.bagage_info.ok_pied_avion}</b></i></li>
        <li ><b><i>Bagage emplacement south A :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_emplacement_south_A}</b></i>  </li>
        <li ><b><i>Bagage emplacement south B :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_emplacement_south_B}</b></i>  </li>
        <li><b><i>Bagage emplacement south C :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_emplacement_south_C}</b></i>  </li>
        <li ><b><i>Bagage embarqué :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_embarquement_depart}</b></i></li>
        <li ><b><i>Bagage debarqué :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_debarquement_depart}</b></i>  </li>
        <li ><b><i>Bagage stocké :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_stocke_depart}</b></i>  </li>

        </ul>
        </div>
        </Col>
        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>INFORMATIONS STATUS LIEU DESTINATION </i></b></u></h6>
        <ul>
        <li ><b><i>operation vol en arrivé :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_checker_arriver }</b></i></li>
        <li ><b><i>Bagage debarqué:</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_debarquement_arrivee}</b></i>  </li>
        <li ><b><i>Bagage en tapis livraison :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_en_tapis_livraison}</b></i></li>
        <li ><b><i>Bagage livré au passager:</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_livrer}</b></i></li>
        <li ><b><i>Bagage stocké :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_stocke_arrivee}</b></i>  </li>
        </ul>
        </div>
        </Col>
    </Row>

    <Row className='justify-content-center '>

        <Col xs = {12} className='text-center borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>INFORMATIONS POIDS BAGAGE </i></b></u></h6>
        <ul>
        <li ><b><i>kilos bagage tarmaque :</i></b><i className='couleur text-success'><b> {infoBagage.bagage_info.kilos_bagage_tarmaque} kg</b></i></li>
        <li ><b><i>kilos bagage du manifest :</i></b> <i  className='couleur text-success'><b>{JSON.stringify(infoBagage.bagage_info.bagage_weight_info).trim().slice(3,5)} kg</b></i></li>
        <li ><b><i>Difference de poids (k.b.tarmaque - k.b.manifest) :</i></b> <i className='couleur text-success'><b><u>{kilosDifference}</u> kg</b></i> </li>
        </ul>
        </div>
        </Col>
        
    </Row>
  
  
    <Row className='justify-content-center mb-3 pt-3 '>
        <Col xs ={4} >
        
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={message}>
        Imprimer informations
        </Button>
        </Link>

        </Col>
    </Row>

</div>
</Container>}

{isMobileOrTablet && <Container className='mx-auto justify-content-center text-center borders mb-5' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={"auto"}>
            <Link to="/form_baggage_info">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 className='text-center'><u><b><i>INFORMATIONS PROPRITAIRE BAGAGE</i></b></u></h6>
        <li><b><i>Noms Propritaire : </i></b><i className='couleur' ><b>{JSON.stringify(infoBagage.bagage_info.passenger_and_ticket_info).trim().slice(16,50)}</b> </i></li>
        <li><b><i>Code PNR Passager : </i></b><i className='couleur'><b>{JSON.stringify(infoBagage.bagage_info.pnr_and_bagage_info).trim().slice(3,9)}</b></i></li>
        <li><b><i>Informations sur le vol : </i></b><i className='couleur' ><b>{JSON.stringify(infoBagage.bagage_info.flight_info).trim().slice(3,49)}</b></i></li>
        <li><b><i>Informations sur l'avion : </i></b><i className='couleur' ><b>{JSON.stringify(infoBagage.bagage_info.avion_info).trim().slice(3,38)}</b></i></li>
        </div>
        </Col>
</Row>
    <Row className='justify-content-center '>

        <Col xs = {12} className='text-center borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>INFORMATIONS STATUS LIEU DEPART </i></b></u></h6>
        <ul>
        <li ><b><i>operation vol en depart  :</i></b> <i  className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_checker_depart}</b></i></li>
        <li ><b><i>Bagage au fin tapis :</i></b> <i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_fin_tapis}</b></i> </li>
        <li ><b><i>Bagage au pied avion :</i></b> <i className='couleur text-success'><b>{infoBagage.bagage_info.ok_pied_avion}</b></i></li>
        <li ><b><i>Bagage emplacement south A :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_emplacement_south_A}</b></i>  </li>
        <li ><b><i>Bagage emplacement south B :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_emplacement_south_B}</b></i>  </li>
        <li><b><i>Bagage emplacement south C :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_emplacement_south_C}</b></i>  </li>
        <li ><b><i>Bagage embarqué :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_embarquement_depart}</b></i></li>
        <li ><b><i>Bagage debarqué :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_debarquement_depart}</b></i>  </li>

        </ul>
        </div>
        </Col>
        
    </Row>
    
    <Row className='justify-content-center '>
    <Col xs = {12} className='text-center borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>INFORMATIONS STATUS LIEU DESTINATION </i></b></u></h6>
        <ul>
        <li ><b><i>operation vol en arrivé :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_checker_arriver }</b></i></li>
        <li ><b><i>Bagage debarqué:</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_debarquement_arrivee}</b></i>  </li>
        <li ><b><i>Bagage en tapis livraison :</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_en_tapis_livraison}</b></i></li>
        <li ><b><i>Bagage livré au passager:</i></b><i className='couleur text-success'><b>{infoBagage.bagage_info.ok_bagage_livrer}</b></i></li>
        </ul>
        </div>
        </Col>
    </Row>

    <Row className='justify-content-center '>

<Col xs = {12} className='text-center borders pt-2'>
<div >
<h6 className='text-center'><u><b><i>INFORMATIONS POIDS BAGAGE </i></b></u></h6>
<ul>
<li ><b><i>kilos bagage tarmaque :</i></b><i className='couleur text-success'><b> {infoBagage.bagage_info.kilos_bagage_tarmaque} kg</b></i></li>
<li ><b><i>kilos bagage du manifest :</i></b> <i  className='couleur text-success'><b>{JSON.stringify(infoBagage.bagage_info.bagage_weight_info).trim().slice(3,5)} kg</b></i></li>
<li ><b><i>Difference de poids (k.b.tarmaque - k.b.manifest) :</i></b> <i className='couleur text-success'><b><u>{kilosDifference}</u> kg</b></i> </li>
</ul>
</div>
</Col>

</Row>
  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={12} >
        
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

export default BagagePageInformation;