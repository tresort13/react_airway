import 'bootstrap/dist/css/bootstrap.min.css';
import  './Login.css';
import Header from './Header';
import Footer from './Footer';
import './Header.css';
import FormTracerPassagers from './FormTracerPassagers';



function TracerPassagers(props)
{
return (
        
<>
<Header username={props.username} />
<FormTracerPassagers setOperationBG = {props.setOperationBG}  setPositionBG = {props.setPositionBG} setVolInfo = {props.setVolInfo}/>
<Footer />
</>
    )
}

export default TracerPassagers;