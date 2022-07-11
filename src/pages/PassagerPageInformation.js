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



function PassagerPageInformation(props)
{
    console.log(props.barcodeInfo)

    const[infoPassager,setInfoPassager] = useState({passager_info:{
        numero_barcode_passager :"",
        passenger_and_ticket_info : "",
        pnr_and_bagage_info :"",
        bagage_weight_info :"",
        flight_info :"",
        avion_info:"",
        ok_passager_checker_depart :"",
        ok_passager_checker_arriver :"",
        ok_passager_localisation_dgm :"",
        ok_passager_localisation_salle_attente :"",
        ok_passager_embarquement_avion :"",
        ok_passager_debarquement_avion:"",
        ok_passager_arriver_et_recuperer_baggage :"",
        date_heure_operation :"",
        date_operation:"",
        agent_id_save:""
        }})
        
        const passagerData = (res)=>
        {
          setInfoPassager({
            passager_info:{
                numero_barcode_passager :res.numero_barcode_passager,
                passenger_and_ticket_info : res.passenger_and_ticket_info,
                pnr_and_bagage_info :res.pnr_and_bagage_info,
                bagage_weight_info :res.bagage_weight_info,
                flight_info :res.flight_info,
                avion_info:res.avion_info,
                ok_passager_checker_depart :res.ok_passager_checker_depart,
                ok_passager_checker_arriver :res.ok_passager_checker_arriver,
                ok_passager_localisation_dgm :res.ok_passager_localisation_dgm,
                ok_passager_localisation_salle_attente :res.ok_passager_localisation_salle_attente,
                ok_passager_embarquement_avion :res.ok_passager_embarquement_avion,
                ok_passager_debarquement_avion:res.ok_passager_debarquement_avion,
                ok_passager_arriver_et_recuperer_baggage :res.ok_passager_arriver_et_recuperer_baggage,
                date_heure_operation :res.date_heure_operation,
                date_operation:res.date_operation,
                agent_id_save:res.agent_id_save
          }})
        }

        const message = ()=>
        {
            alert(" désolé la page d'impression n'est pas encore disponible")
        }

const updateAutoPassager = ()=>
{
    fetch('http://localhost:8000/api/passagerAutoQuery/'+props.barcodeInfo+'/', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                //body: JSON.stringify(props.barcodeInfo)
              })
              .then( res => res.json())
              .then(
                res => {   
                    passagerData(res)         
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
       const interval =  setInterval(()=>updateAutoPassager(),1000);
        return () => clearInterval(interval)
    },[props.barcodeInfo])
    
  
    return (
        <>
            <Header />
<Container className='justify-content-center text-center borders' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={6}>
            <Link to="/form_passager_info">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
       
        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
        <h6><u><b><i>INFORMATIONS GENERALE PASSAGER</i></b></u></h6>
        <li><b><i>Noms Passager : </i></b><i className='couleur' ><b>{JSON.stringify(infoPassager.passager_info.passenger_and_ticket_info).trim().slice(16,50)}</b> </i></li>
        <li><b><i>Code PNR Passager : </i></b><i className='couleur'><b>{JSON.stringify(infoPassager.passager_info.pnr_and_bagage_info).trim().slice(3,9)}</b></i></li>
        <li><b><i>Informations sur le vol : </i></b><i className='couleur' ><b>{JSON.stringify(infoPassager.passager_info.flight_info).trim().slice(3,49)}</b></i></li>
        <li><b><i>Informations sur l'avion : </i></b><i className='couleur' ><b>{JSON.stringify(infoPassager.passager_info.avion_info).trim().slice(3,38)}</b></i></li>
        </div>
        </Col>
    </Row>
    <Row >

        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>INFORMATIONS STATUS LIEU DEPART </i></b></u></h6>
        <ul>
        <li><b><i>Type d'operation  :</i></b> <i className='couleur text-success'><b>{infoPassager.passager_info.ok_passager_checker_depart}</b></i></li>
        <li><b><i>Passager en salle DGM :</i></b> <i className='couleur text-success'><b>{infoPassager.passager_info.ok_passager_localisation_dgm}</b></i> </li>
        <li><b><i>Passager en salle d'attente :</i></b> <i className='couleur text-success'><b>{infoPassager.passager_info.ok_passager_localisation_salle_attente }</b></i></li>
        <li><b><i>Passager embarqué :</i></b><i className='couleur text-success'><b>{infoPassager.passager_info.ok_passager_embarquement_avion}</b></i></li>
        </ul>
        </div>
        </Col>
        <Col xs = {6} className='text-start borders pt-2'>
        <div >
        <h6 className='text-center'><u><b><i>INFORMATIONS STATUS LIEU DESTINATION </i></b></u></h6>
        <ul>
        <li><b><i>Type d'operation :</i></b><i className='couleur text-success'><b>{infoPassager.passager_info.ok_passager_checker_arriver }</b></i></li>
        <li><b><i>Passager debarqué : </i></b><i className='couleur text-success'><b>{infoPassager.passager_info.ok_passager_debarquement_avion}</b></i>  </li>
        <li><b><i>Passager récuperé bagage :</i></b><i className='couleur text-success'><b>{infoPassager.passager_info.ok_passager_arriver_et_recuperer_baggage}</b></i></li>
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
</Container>
        </>
    )
}

export default PassagerPageInformation;