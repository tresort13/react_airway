import 'bootstrap/dist/css/bootstrap.min.css';
import  './Login.css';
import Header from './Header';
import Footer from './Footer';
import './Header.css';
import FormScanningBaggages from './FormScanningBaggages';




function ScanningBaggages(props)
{
return (
        
<>
<Header username={props.username} bagageData={props.bagageData}/>
<FormScanningBaggages operationBG = {props.operationBG} positionBG = {props.positionBG} volInfo={props.volInfo} />
<Footer />
</>
    )
}

export default ScanningBaggages;