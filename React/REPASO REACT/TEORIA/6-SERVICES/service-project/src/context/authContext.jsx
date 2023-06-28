/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";


//* -------------CREAMOS EL CONTEXTO-----------------------
const AuthContext = createContext()



//* -------------FUNCIÓN QUE PROVEE EL CONTEXTO Y WRAPEA LAS PÁGINAS-----------------------

export const AuthContextProvider = ({children}) =>{
    const navigate = useNavigate()
    const [user, setUser] = useState(()=>{
        const data = localStorage.getItem("user")
        const parseUser = JSON.parse(data)
        
        return data? parseUser :null
    })


const [allUser, setAllUser] = useState({
    data:{
        confirmationCode: "",
        user:{
            password:"",
            email:""
        }
    }
})

//*-----------------LOGIN---------------------------

const userLogin =(data)=>{
    //? esto hay que meterlo después a session
localStorage.setItem("user", data)
const parseUser = JSON.parse(data)
setUser(()=>parseUser)
}



//*----------------PUENTE PARA EVITAR PROBLEMAS DE ASINCRONIA---------------------------
const bridgeData = (state)=>{

    const data  = localStorage.getItem("data")
    const dataJson = JSON.parse(data)
    switch (state) {
        case "ALLUSER":
            setAllUser(dataJson)
            localStorage.removeItem("data")
            
            break;
    
        default:
            break;
    }


}

//*-----------------LOG-OUT---------------------------


 const logOut = () => {
localStorage.removeItem("user")
setUser(null)
navigate(Login)
}

//? Usememo memoriza el retunr de una función 
    const value = useMemo(()=>({user, setUser, userLogin, logOut, allUser, setAllUser, bridgeData}),[user, setAllUser])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

//* -------------CUSTOM HOOK QUE NOS AYUDA A UTILIZAR EL  CONTEXTO-----------------------


export const useAuth= ()=>{
    return useContext(AuthContext)
}