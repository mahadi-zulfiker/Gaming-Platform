import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { checkPropTypes as PropTypes } from "prop-types";


const Secure = ({children}) => {

const {user, loader}= useContext(AuthContext);

if(loader){
    return <div className="flex justify-center items-center p-72"><span className="loading loading-spinner loading-lg"></span></div>
}
if(user){
    return children
}

    return <Navigate to="/login"></Navigate>
};

export default Secure;

Secure.propTypes = {
    children: PropTypes.node
}