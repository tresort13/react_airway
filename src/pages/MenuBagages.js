import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  './Login.css';
import {Link} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive'



function MenuBagages(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    return (
<>
<Header username={props.username} />
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:30,backgroundColor:'white',width:750}} >
    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
            <Link to="/home">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col xs ={6}>
        <Link to="/vol_select_bagage" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <i>Enregistrement Barcodes Bagages</i>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {6}>
        <Link to="/tracer_baggages" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <i>commencez operation scanning</i>
        </Button>
        </Link>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={6}>
        <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <i>Tracker un bagage</i>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs ={6}>
        <Link to="/form_date_vol_bagage" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <i>Tracker un vol pour les bagages</i>
        </Button>
        </Link>
        </Col>
    </Row>

</Container>}

{isMobileOrTablet && <Container className='my-auto justify-content-center text-center bordure mt-2' style={{backgroundColor:'white'}} >
    <Row className='justify-content-center m-3 ' >
        <Col xs={"auto"}>
            <Link to="/home">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    <Row className='justify-content-center pb-2'>
        <Col xs={"auto"}>
        <Link to="/vol_select_bagage" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
        <i>Enregistrement Barcodes Bagages</i>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2'>
        <Col xs={"auto"}>
        <Link to="/tracer_baggages" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
        <i>commencez operation scanning</i>
        </Button>
        </Link>
        </Col>
    </Row>
  
    <Row className='justify-content-center pb-2'>
        <Col xs={"auto"}>
        <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
        <i>Tracker un bagage</i>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2'>
        <Col xs={"auto"}>
        <Link to="/form_date_vol_bagage" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
        <i>Tracker un vol pour les bagages</i>
        </Button>
        </Link>
        </Col>
    </Row>

</Container>}


<Footer />
</>
    )
}

export default MenuBagages;