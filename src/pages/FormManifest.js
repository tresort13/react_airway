import React,{useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  './Login.css';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css';
import { useMediaQuery } from 'react-responsive';

const useState = React.useState

function FormManifest(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
const inputRef = useRef(null)
const [manifest,setManifest] = useState()

const [message,setMessage] = useState("veuillez charger le manifest de vol")
const [couleur,setCouleur] = useState("text-dark")
const navigate = useNavigate()

const resetFileInput = () => {
    // 👇️ reset input value
    inputRef.current.value = null;
  };
const submitManifest = (e)=>
{
    
    e.preventDefault()
   const uploadData = new FormData();
  uploadData.append('manifest', manifest);
    
    fetch('http://127.0.0.1:8000/api/manifestUpload/', {
            method:'POST',
            body: uploadData
          })
          .then( res => res.json())
          .then(
            res => {   
                if(res =="ok")
                {
                    
                    setMessage(" manifest de vol  <<" +manifest.name+">> chargé avec succès ")
                    setCouleur("text-success")
                    navigate("/form_manifest")
                } 
                else{
                    setMessage("echec de chargement du manifest de vol !! ")
                    setCouleur("text-danger")
                }
                        
            }
          )
          .catch( (error) =>
            {
                setMessage("echec de chargement")
            } )
            
    resetFileInput()
}
return (
<>
<Header username={props.username}/>
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white',width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={6}>
            <Link to="/menu_gestion_vols">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control ref={inputRef}   name="manifest" type="file" placeholder="Veuillez scanner le barcode passager" onChange={(e)=>setManifest(e.target.files[0])} />
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitManifest(e)}>
        chargement manifest vol
        </Button>
        </Link>

        </Col>
    </Row>

</Form>
</Container>}

{isMobileOrTablet && <Container className='justify-content-center text-center bordure' style={{marginTop:50,backgroundColor:'white'}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={"auto"}>
            <Link to="/menu_gestion_vols">
            <Image src={require('./logo_new.jpg')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row className='justify-content-center'>
        <Col xs={"auto"}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control ref={inputRef}   name="manifest" type="file" placeholder="Veuillez scanner le barcode passager" onChange={(e)=>setManifest(e.target.files[0])} />
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={e=>submitManifest(e)}>
        chargement manifest vol
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

export default FormManifest;