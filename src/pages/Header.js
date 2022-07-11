import Container from "react-bootstrap/esm/Container";
import { Link,useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useEffect,useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useMediaQuery } from 'react-responsive';
import Button from "react-bootstrap/Button";




function Header(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });

    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

    const logout = ()=>
    {
      window.localStorage.setItem("username", JSON.stringify(""))
      navigate('/')
    }
    return (
     <div>
    {isDesktop && <Container fluid style={{backgroundColor:'white'}}>
    <Row>
        <Col xs={3} className="my-auto mx-auto text-start">
          <a href="#" style={{textDecoration:"none"}}>
          <Image onClick={handleShow} src={require('./congo_airways_background.jpg')}  className='rounded-pill ' style={{width:130}}></Image>
          </a>
        </Col>
        <Col xs={5} className="my-auto mx-auto text-center">
        <Link to="/home">
          <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:250}}></Image>
          </Link>
        </Col>
        <Col xs={4} className="my-auto mx-auto text-end ">
         <div>
           <pre className="text-dark display-6" style={{fontSize: 20}}><Image className="navbar-brand rounded-circle" src={require('/Users/mac/Desktop/travel_trace_app/congo-airways/src/images/avatar_new.jpg')} type="button" alt="profil" style={{width:40}} ></Image><span ><i>Bonjour {props.username}</i> </span><span className="separateur text-primary"></span><a href="" style={{textDecoration:"none"}}><span className="text-danger"><i onClick={logout}> Logout </i> </span></a></pre>
           <i><pre className="text-dark display-6 timing text-center" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
    <Offcanvas show={show} onHide={handleClose} className="bordure " style={{height:550}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-end"><b>Menu Navigation</b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/menu_bagages"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Tracer Bagages</i></Button></Nav.Link>
        <Nav.Link href="/menu_passagers"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Tracer Passagers</i></Button></Nav.Link>
        <Nav.Link href="/menu_gestion_vols"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Gestion vols</i></Button></Nav.Link>
        <Nav.Link href="/menu_livraison"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Gestion Livraison</i></Button></Nav.Link>
        <Nav.Link href="/menu_audit"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Audit</i></Button></Nav.Link>
        <Nav.Link href="/menu_utilisateurs"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Gestion d'utilisateur</i></Button></Nav.Link>
          
                  
                </Nav>

        </Offcanvas.Body>
      </Offcanvas>
   </Container>}


   {isMobileOrTablet && <Container className="pt-2" fluid style={{backgroundColor:'white'}}>
    <Row>
        
        <Col xs={"auto"} className="mx-auto my-auto text-start">
        <a href="#" style={{textDecoration:"none"}}>
          <Image onClick={handleShow} src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:200}}></Image>
          </a>
        </Col>
        <Col xs={"auto"} className=" mx-auto my-auto text-end ">
         <div>
           <pre className="text-dark display-6 text-end" style={{fontSize: 20}}><span ><i><b>{props.username}</b></i> </span><span className="separateur text-primary"></span><a href="" style={{textDecoration:"none"}}><span className="text-danger"><i onClick={logout}> Logout </i> </span></a></pre>
           <i><pre className="text-dark display-6 timing text-end" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
    <Offcanvas show={show} onHide={handleClose} className="bordure " style={{height:550}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center"><i className="display-6 text-secondary text-center"><b>Menu Navigation</b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/menu_bagages"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Tracer Bagages</i></Button></Nav.Link>
        <Nav.Link href="/menu_passagers"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Tracer Passagers</i></Button></Nav.Link>
        <Nav.Link href="/menu_gestion_vols"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Gestion vols</i></Button></Nav.Link>
        <Nav.Link href="/menu_livraison"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Gestion Livraison</i></Button></Nav.Link>
        <Nav.Link href="/menu_audit"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Audit</i></Button></Nav.Link>
        <Nav.Link href="/menu_utilisateurs"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-primary'><i>Gestion d'utilisateur</i></Button></Nav.Link>     
        </Nav>

        </Offcanvas.Body>
      </Offcanvas>
   </Container>}
   </div>

    )
}

export default Header;