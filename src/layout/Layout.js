import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import GlobalStyle from '../assets/style/GlobalStyle';
import { connect } from 'react-redux'



const Layout = ({children, loggedIn}) =>{
    return(
        <div>
       <Navbar loggedIn={loggedIn}/>
       <GlobalStyle/>
       {children}

        </div>

    )
}

const mapStateToProps = ({firebase}) => ({
    loggedIn: firebase.auth.uid
})




export default connect(mapStateToProps)(Layout)