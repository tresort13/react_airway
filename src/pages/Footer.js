import Container from "react-bootstrap/esm/Container";
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';

function Footer()
{

return (
<div className="footer container-fluid bg-white ">
    <Container>
        <div className=" py-2 text-center ">
         <p className="text-secondary" style={{textAlign:'center'}}>&copy; 2022 CONGO AIRWAYS  <span style={{width:5}}>Ltd</span>, Inc. All rights reserved.</p>
       </div>
    </Container>
 </div>
)
}

export default Footer;