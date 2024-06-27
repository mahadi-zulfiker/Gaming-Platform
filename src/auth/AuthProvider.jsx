import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { checkPropTypes as PropTypes } from "prop-types";
import auth from "../firebase/FireBase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);



    const registerUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const createUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoader(true);
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider()

    const signToGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(currentUser);
            setLoader(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])




    const authInfo = {
      user, loader, registerUser, createUser, signOutUser, signToGoogle
    };

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}