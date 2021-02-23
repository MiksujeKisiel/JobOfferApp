import React from 'react'
import Navbar from '../components/Navbar/Navbar';

// import Footer from '../components/Items/Footer/Footer';


const Layout = ({children, loggedIn}) =>{
    return(
        <>
       <Navbar loggedIn={loggedIn}/>
   
       {children}
        </>
    )
}





export default Layout

