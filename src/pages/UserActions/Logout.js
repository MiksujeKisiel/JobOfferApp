import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions';
import { useHistory } from "react-router";
const Logout = ({ logout}, props) => {
    let history = useHistory()
    useEffect(() =>{
        logout();
        history.push("/");
    }, [logout, history]);
    return null
    
};
 




const mapDispatchToProps = {
    logout: actions.signOut
}





export default connect(null, mapDispatchToProps)(Logout)
