import React,{useContext,useEffect} from 'react'
import { Context as authContext } from '../context/authContext'

const TryLocalAuth = () => {
    const {tryLocalSignin, loading}  = useContext(authContext)
    useEffect(() => {
        tryLocalSignin()
    }, []);
  return null
}

export default TryLocalAuth