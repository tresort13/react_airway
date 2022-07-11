import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import React,{useEffect, useState} from 'react';

function Home(props)
{  
   

    
      
    return (    
        <>
       <Header username={props.username} setUsername = {props.setUsername} />
       <Homepage />
       <Footer />
       </>
    )
}

export default Home;