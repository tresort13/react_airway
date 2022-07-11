import 'bootstrap/dist/css/bootstrap.min.css';
import  './Login.css';
import Header from './Header';
import Footer from './Footer';
import './Header.css';
import FormScanningPassagers from './FormScanningPassagers';



function ScanningPassagers(props)
{
return (
        
<>
<Header username={props.username} />
<FormScanningPassagers operationBG = {props.operationBG} positionBG = {props.positionBG} volInfo={props.volInfo}/>
<Footer />
</>
    )
}

export default ScanningPassagers;