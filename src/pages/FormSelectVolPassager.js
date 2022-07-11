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
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';



function FormSelectVolPassager(props)
{
        
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    const[volInfo,setVolInfo] = useState('')

    const sendingData = ()=>
    {
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
    <Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:160,backgroundColor:'white',width:750}} >
    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <Link to ="/menu_passagers">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>
        
        </Col>
    </Row>
    
<Form>

    <Row className='justify-content-center'>
        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={volInfo} aria-label="Default select example" onChange={e=>setVolInfo(e.target.value)}>
         <option>Veuillez selectionnez le vol  </option>
         {volData.map((donnes)=>{
          return <option value={donnes.flight_info}>{donnes.flight_info}</option>
         })}
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={2}>
        
        <Link to="/form_enregistrement_passager" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={sendingData} variant="primary" type="submit">
        Validation
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center bordure' style={{marginTop:160,backgroundColor:'white'}} >
    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <Link to ="/menu_passagers">
        <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
        </Link>
        
        </Col>
    </Row>
    
<Form>

    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={volInfo} aria-label="Default select example" onChange={e=>setVolInfo(e.target.value)}>
         <option>Veuillez selectionnez le vol  </option>
         {volData.map((donnes)=>{
          return <option value={donnes.flight_info}>{donnes.flight_info}</option>
         })}
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/form_enregistrement_passager" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={sendingData} variant="primary" type="submit">
        Validation
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

export default FormSelectVolPassager;