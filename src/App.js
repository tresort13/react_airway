import React,{ useEffect } from 'react';
import Login from "./pages/Login";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './pages/Login.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import TracerBaggages from "./pages/TracerBaggages";
import ScanningBaggages from './pages/ScanningBaggages';
import TracerPassagers from "./pages/TracerPassagers";
import ScanningPassagers from "./pages/ScanningPassagers";
import MenuGestionVols from "./pages/MenuGestionVols";
import FormManifest from "./pages/FormManifest";
import FormInformationBaggage from './pages/FormInformationBaggage';
import MenuBagages from './pages/MenuBagages';
import MenuPassagers from './pages/MenuPassagers';
import FormInformationPassager from './pages/FormInformationPassager';
import FormEnregistrementBagages from './pages/FormEnregistrementBagages';
import FormEnregistrementPassagers from './pages/FormEnregistrementPassagers';
import BagagePageInformation from './pages/BagagePageInformation';
import PassagerPageInformation from './pages/PassagerPageInformation';
import FormEnregistrementVol from './pages/FormEnregistrementVol';
import FormVolBagagesInfo from './pages/FormVolBagagesInfo';
import FormVolPassagersInfo from './pages/FormVolPassagersInfo';
import VolBagagePageInfo from './pages/VolBagagePageInfo';
import VolPassagerPageInfo from './pages/VolPassagerPageInfo';
import FormSelectVolBagage from './pages/FormSelectVolBagage';
import FormSelectVolPassager from './pages/FormSelectVolPassager';
import MenuGestionLivraison from './pages/MenuGestionLivraison';
import FormVolSelectNonLivre from './pages/FormVolSelectNonLivre';
import BagagesNonLivresInfo from './pages/BagagesNonLivresInfo';
import BagagesNonLivresDetails from './pages/BagageNonLivresDetails';
import {Navigate} from  'react-router-dom';
import MenuAudit from './pages/MenuAudit';
import FormPoidsBaggages from './pages/FormPoidsBagages';
import FormPoidsBaggages2 from './pages/FormPoidsBagages2';
import FormDatePoids from './pages/FormDatePoids';
import FormVolPoidsInfo from './pages/FormVolPoidsInfo';
import FormDateVolBagages from './pages/FormDateVolBagages';
import FormDateVolPassager from './pages/FormDateVolPassager';
import FormDateVolLivraison from './pages/FormDateVolLivraison';
import PoidsBagageInfo from './pages/PoidsBagageInfo';
import DetailAnomaliesPoidsBagages from './pages/DetailAnomaliesPoidsBagages';
import MenuUsers from './pages/MenuUsers';

const useState = React.useState

function App() {

  const [username,setUsername] = useState(()=>
  {
    const localData = localStorage.getItem('username');
    return localData ? JSON.parse(localData) : "";
  });
  
  

  useEffect(() => {
    window.localStorage.setItem("username", JSON.stringify(username))
  }, [username])

  const [barcodeInfo,setBarcodeInfo] = useState(()=>
  {
    const localData = localStorage.getItem('barcodeInfo');
   return localData ? JSON.parse(localData) : "";})

   useEffect(() => {
    window.localStorage.setItem("barcodeInfo", JSON.stringify(barcodeInfo))
  }, [barcodeInfo])
  

    const[operationBG,setOperationBG] = useState(()=>
    {
    const localData = localStorage.getItem('operationBG');
   return localData ? JSON.parse(localData) : "";})

   useEffect(() => {
    window.localStorage.setItem("operationBG", JSON.stringify(operationBG))
  }, [operationBG])
    
    const[positionBG,setPositionBG] = useState(()=>
    {
    const localData = localStorage.getItem('positionBG');
   return localData ? JSON.parse(localData) : "";})

   useEffect(() => {
    window.localStorage.setItem("positionBg", JSON.stringify(positionBG))
  }, [positionBG])

    const[volInfo,setVolInfo] = useState(()=>
    {
      const localData = localStorage.getItem('volInfo');
   return localData ? JSON.parse(localData) : "";})

   useEffect(() => {
    window.localStorage.setItem("volInfo", JSON.stringify(volInfo))
  }, [volInfo])

  const[temps,setTemps] = useState(()=>
    {
      const localData = localStorage.getItem('temps');
   return localData ? JSON.parse(localData) : "";})

   useEffect(() => {
    window.localStorage.setItem("temps", JSON.stringify(temps))
  }, [temps])


    
    
  

  return ( 
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login setUsername = {setUsername} />} >
        </Route>

        <Route path="/home"  element={username == "" ? <Navigate to ='/' /> : <Home username = {username} setUsername = {setUsername}/>} >
        </Route>

        <Route path="/tracer_baggages" element={username == "" ? <Navigate to ='/' /> :<TracerBaggages username = {username}  setOperationBG={setOperationBG} setPositionBG={setPositionBG} setVolInfo={setVolInfo}/>} >
        </Route>

        <Route path="/scanning_baggages" element={username == "" ? <Navigate to ='/' /> :<ScanningBaggages username = {username}  operationBG={operationBG} positionBG={positionBG} volInfo={volInfo} />} >
        </Route>

        <Route path="/tracer_passagers" element={username == "" ? <Navigate to ='/' /> :<TracerPassagers username = {username} setOperationBG={setOperationBG} setPositionBG={setPositionBG} setVolInfo={setVolInfo}/>} >
        </Route>

        <Route path="/scanning_passagers" element={username == "" ? <Navigate to ='/' /> :<ScanningPassagers username = {username} operationBG={operationBG} positionBG={positionBG} volInfo={volInfo}/>} >
        </Route>

        <Route path="/menu_gestion_vols" element={username == "" ? <Navigate to ='/' /> :<MenuGestionVols username = {username}/>} >
        </Route>

        <Route path="/form_manifest" element={username == "" ? <Navigate to ='/' /> :<FormManifest username = {username}/>} >
        </Route>

        <Route path="/form_baggage_info" element={username == "" ? <Navigate to ='/' /> :<FormInformationBaggage username = {username}  setBarcodeInfo={setBarcodeInfo} barcodeInfo={barcodeInfo}/>} >
        </Route>

        <Route path="/menu_bagages" element={username == "" ? <Navigate to ='/' /> :<MenuBagages username = {username}/>} >
        </Route>

        <Route path="/menu_passagers" element={username == "" ? <Navigate to ='/' /> :<MenuPassagers username = {username}/>} >
        </Route>

        <Route path="/form_passager_info" element={username == "" ? <Navigate to ='/' /> :<FormInformationPassager username = {username} setBarcodeInfo={setBarcodeInfo}/>} >
        </Route>

        <Route path="/form_enregistrement_bagage" element={username == "" ? <Navigate to ='/' /> :<FormEnregistrementBagages username = {username} volInfo = {volInfo}/>} >
        </Route>

        <Route path="/form_enregistrement_passager" element={username == "" ? <Navigate to ='/' /> :<FormEnregistrementPassagers username = {username} volInfo = {volInfo}/>} >
        </Route>

        <Route path="/bagage_page_info" element={username == "" ? <Navigate to ='/' /> :<BagagePageInformation username = {username}  barcodeInfo={barcodeInfo}/>} >
        </Route>

        <Route path="/passager_page_info" element={username == "" ? <Navigate to ='/' /> :<PassagerPageInformation username = {username}  barcodeInfo={barcodeInfo}/>} >
        </Route>

        <Route path="/form_enregistrement_vol" element={username == "" ? <Navigate to ='/' /> :<FormEnregistrementVol username = {username}  barcodeInfo={barcodeInfo}/>} >
        </Route>

        <Route path="/form_vol_bagage_info" element={username == "" ? <Navigate to ='/' /> :<FormVolBagagesInfo username = {username}  setVolInfo={setVolInfo}/>} >
        </Route>

        <Route path="/form_vol_passager_info" element={username == "" ? <Navigate to ='/' /> :<FormVolPassagersInfo username = {username}  setVolInfo={setVolInfo}/>} >
        </Route>

        <Route path="/vol_bagage_page_info" element={username == "" ? <Navigate to ='/' /> :<VolBagagePageInfo username = {username}  volInfo = {volInfo} />} >
        </Route>

        <Route path="/vol_passager_page_info" element={username == "" ? <Navigate to ='/' /> :<VolPassagerPageInfo username = {username}  volInfo = {volInfo} />} >
        </Route>

        <Route path="/vol_select_bagage" element={username == "" ? <Navigate to ='/' /> :<FormSelectVolBagage username = {username}  setVolInfo={setVolInfo} />} >
        </Route>

        <Route path="/vol_select_passager" element={username == "" ? <Navigate to ='/' /> :<FormSelectVolPassager username = {username}  setVolInfo={setVolInfo} />} >
        </Route>

        <Route path="/menu_livraison" element={username == "" ? <Navigate to ='/' /> :<MenuGestionLivraison username = {username}   />} >
        </Route>

        <Route path="/form_vol_select_non_livre" element={username == "" ? <Navigate to ='/' /> :<FormVolSelectNonLivre username = {username}  setVolInfo={setVolInfo} />} >
        </Route>

        <Route path="/vol_bagage_non_livre_info" element={username == "" ? <Navigate to ='/' /> :<BagagesNonLivresInfo username = {username}  volInfo = {volInfo} />} >
        </Route>

        <Route path="/bagage_non_livres" element={username == "" ? <Navigate to ='/' /> :<BagagesNonLivresDetails username = {username}  volInfo = {volInfo} setBarcodeInfo = {setBarcodeInfo} />} >
        </Route>

        <Route path="/menu_audit" element={username == "" ? <Navigate to ='/' /> :<MenuAudit username = {username}  volInfo = {volInfo} setBarcodeInfo = {setBarcodeInfo} />} >
        </Route>

        <Route path="/form_poids_bagages" element={username == "" ? <Navigate to ='/' /> :<FormPoidsBaggages username = {username}  volInfo = {volInfo} setBarcodeInfo = {setBarcodeInfo} />} >
        </Route>

        <Route path="/form_poids_bagages2" element={username == "" ? <Navigate to ='/' /> :<FormPoidsBaggages2 username = {username}  volInfo = {volInfo} barcodeInfo = {barcodeInfo} />} >
        </Route>

        <Route path="/form_date_poids" element={username == "" ? <Navigate to ='/' /> :<FormDatePoids username = {username}  volInfo = {volInfo} barcodeInfo = {barcodeInfo}  setTemps = {setTemps}/>} >
        </Route>

        <Route path="/form_vol_poids_info" element={username == "" ? <Navigate to ='/' /> :<FormVolPoidsInfo username = {username}  setVolInfo={setVolInfo} barcodeInfo = {barcodeInfo}  temps = {temps}/>} >
        </Route>

        <Route path="/form_date_vol_bagage" element={username == "" ? <Navigate to ='/' /> :<FormDateVolBagages username = {username}  setVolInfo={setVolInfo} barcodeInfo = {barcodeInfo}  temps = {temps}/>} >
        </Route>

        <Route path="/form_date_vol_passager" element={username == "" ? <Navigate to ='/' /> :<FormDateVolPassager username = {username}  setVolInfo={setVolInfo} barcodeInfo = {barcodeInfo}  temps = {temps}/>} >
        </Route>

        <Route path="/form_date_vol_livraison" element={username == "" ? <Navigate to ='/' /> :<FormDateVolLivraison username = {username}  setVolInfo={setVolInfo} barcodeInfo = {barcodeInfo}  temps = {temps}/>} >
        </Route>

        <Route path="/poids_bagage_info" element={username == "" ? <Navigate to ='/' /> :<PoidsBagageInfo username = {username} volInfo={volInfo}  setVolInfo={setVolInfo} barcodeInfo = {barcodeInfo}  />} >
        </Route>

        <Route path="/detail_anomalie_poids_bagage" element={username == "" ? <Navigate to ='/' /> :<DetailAnomaliesPoidsBagages username = {username} volInfo={volInfo}  setVolInfo={setVolInfo} barcodeInfo = {barcodeInfo}  />} >
        </Route>

        <Route path="/menu_users" element={username == "" ? <Navigate to ='/' /> :<MenuUsers username = {username} volInfo={volInfo}  setVolInfo={setVolInfo} barcodeInfo = {barcodeInfo}  />} >
        </Route>

      </Routes >
    </BrowserRouter>
  );
}

export default App;

