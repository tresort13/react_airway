import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive'


function Homepage()
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    return (
    <>
       {isDesktop && <Container className="mt-3">
        <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_bagages">
              <Image src={require('./baggage.png')}  className='rounded' style={{width:160}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Tracer Bagages</i></p>
              </div>
             </div>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_passagers">
              <Image src={require('./passenger_tracking.png')}  className='rounded' style={{width:180}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Tracer Passagers</i></p>
              </div>
             </div>          
            </Col>

            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_gestion_vols">
              <Image src={require('./checkin_new.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestion Vols</i></p>
              </div>
             </div>   
            </Col>

        </Row>

        <Row className="text-center justify-content-center mt-3">
        <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_livraison">
              <Image src={require('./livraison3.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestion Livrasons</i></p>
              </div>
             </div>
              
            </Col>


            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom pt-1 bordure" style={{width:300}}>
              <div>
              <Link to="/menu_audit">
              <Image src={require('./audit_new2.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Audit </i></p>
              </div>
             </div>
              
            </Col>

            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_users">
              <Image src={require('./user_management.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestion Utilisateurs</i></p>
              </div>
             </div>
              
            </Col>

        </Row>

       </Container>}

       {isMobileOrTablet && <Container className="mt-3 justify-content-center">
        
            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="my-auto  mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_bagages">
              <Image src={require('./baggage.png')}  className='rounded' style={{width:160}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Tracer Bagages</i></p>
              </div>
             </div>    
            </Col>
            </Row>
           
            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="my-auto text-center justify-content-center mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_passagers">
              <Image src={require('./passenger_tracking.png')}  className='rounded' style={{width:180}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Tracer Passagers</i></p>
              </div>
             </div>          
            </Col>
            </Row>
        
            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_gestion_vols">
              <Image src={require('./checkin_new.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestion Vols</i></p>
              </div>
             </div>   
            </Col>
            </Row>
        

            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className=" mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_livraison">
              <Image src={require('./livraison3.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestion Livrasons</i></p>
              </div>
             </div>
              
            </Col> 
            </Row>


            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom pt-1 bordure" style={{width:300}}>
              <div>
              <Link to="/menu_audit">
              <Image src={require('./audit_new2.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Audit </i></p>
              </div>
             </div>
              
            </Col>
            </Row>

            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded zoom bordure" style={{width:300}}>
              <div>
              <Link to="/menu_users">
              <Image src={require('./user_management.png')}  className='rounded' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestion Utilisateurs</i></p>
              </div>
             </div>
              
            </Col>
            </Row>

       </Container>}
       </>


        
    )
}

export default Homepage;