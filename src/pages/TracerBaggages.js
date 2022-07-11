import 'bootstrap/dist/css/bootstrap.min.css';
import  './Login.css';
import Header from './Header';
import Footer from './Footer';
import './Header.css';
import FormTracerBaggages from './FormTracerBaggages';



function TracerBaggages(props)
{
return (
        
<>
<Header username={props.username} />
<FormTracerBaggages setOperationBG = {props.setOperationBG}  setPositionBG = {props.setPositionBG} setVolInfo = {props.setVolInfo}/>
<Footer />
</>
    )
}

export default TracerBaggages;