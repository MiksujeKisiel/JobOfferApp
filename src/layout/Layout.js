import React from 'react'
import Navbar from '../components/Items/Navbar/Navbar';
import GlobalStyle from '../assets/style/GlobalStyle';
import { connect } from 'react-redux'
import Footer from '../components/Items/Footer/Footer';


const Layout = ({children, loggedIn}) =>{
    return(
        <>
       <Navbar loggedIn={loggedIn}/>
       <GlobalStyle/>
       {children}
       <Footer/>
        </>
    )
}

const mapStateToProps = ({firebase}) => ({
    loggedIn: firebase.auth.uid
})




export default connect(mapStateToProps)(Layout)