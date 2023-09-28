import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../lib/firebase";


let authContext = React.createContext()

const AuthService = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [newNotes, setNewNotes] = useState("")

    const Login = () => {
        createUserWithEmailAndPassword(auth, )
    }

    return (
        <authContext.Provider value={{currentUser, setCurrentUser, newNotes, Login}}>

        </authContext.Provider>
    )
}

export default AuthService

export const useAuth = () => {
    return useContext(authContext);
}