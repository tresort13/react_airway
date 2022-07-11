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
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';



function DetailAnomaliesPoidsBagages(props)
{

    const[bagageData,setBagageData] = useState([])

    const [barcodeValue,setbarcodeValue] = useState("")

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

    const sendingData = ()=>
    {
      props.setBarcodeInfo(barcodeValue) 
    }

    return (
        <>
        <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center borders' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={6}>
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
        <h6><u><b><i>INFORMATIONS SUR LE VOL</i></b></u></h6>
    
        <li><b><i>Informations sur le Vol : </i></b><i className='couleur' ><b>{props.volInfo}</b> </i></li>
           
        </div>
        </Col>
    </Row>

    <Form>

    <Row className='justify-content-center mb-1 pt-3' >
        <Col xs={6}>
        <p><i><b>Liste des identifiants numérique des bagages avec anomalies du poids :</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center '>
        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Select value={barcodeValue}   aria-label="Default select example" onChange={e=>setbarcodeValue(e.target.value)} >
         <option >Selectionnez barcode pour voir les informations du bagage  </option>
         {
             bagageData.filter((value)=>
             {
                return parseInt(value.kilos_bagage_tarmaque) > parseInt(JSON.stringify(value.bagage_weight_info).trim().slice(3,5))
             }).map((value)=>
             {
                 return  <option value={value.numero_barcode_bagage}>{value.numero_barcode_bagage}</option>
             })
         }
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/bagage_page_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={sendingData}  variant="primary" type="submit">
        Voir informations du bagage
        </Button>
        </Link>

        </Col>
    </Row>
</Form>


</div>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center borders' style={{marginTop:20,backgroundColor:'white'}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={"auto"}>
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-start borders pt-2'>
        <div>
            <ul>
        <h6><u><b><i>INFORMATIONS SUR LE VOL</i></b></u></h6>
    
        <li><b><i>Informations sur le Vol : </i></b><i className='couleur' ><b>{props.volInfo}</b> </i></li>
        </ul> 
        </div>
        </Col>
    </Row>

    <Form>

    <Row className='justify-content-center mb-1 pt-3' >
        <Col xs={12}>
        <p><i><b>Liste des identifiants numérique des bagages non livrés :</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center '>
        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Select value={barcodeValue}   aria-label="Default select example" onChange={e=>setbarcodeValue(e.target.value)} >
        <option >Selectionnez barcode pour voir les informations du bagage  </option>
         {
             bagageData.filter((value)=>
             {
                return parseInt(value.kilos_bagage_tarmaque) > parseInt(JSON.stringify(value.bagage_weight_info).trim().slice(3,5))
             }).map((value)=>
             {
                 return  <option value={value.numero_barcode_bagage}>{value.numero_barcode_bagage}</option>
             })
         }
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={"auto"}>
        
        <Link to="/bagage_page_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={sendingData}  variant="primary" type="submit">
        Voir informations du bagage
        </Button>
        </Link>

        </Col>
    </Row>
</Form>


</div>
</Container>}

<Footer />
</>
    )
}

export default DetailAnomaliesPoidsBagages;