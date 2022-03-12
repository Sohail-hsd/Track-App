import React,{useContext,useEffect} from 'react'
import {ActivityIndicator} from 'react-native'
import { Context as authContext } from '../context/authContext'

const TryLocalAuth = () => {
    const {tryLocalSignin}  = useContext(authContext)
    useEffect(() => {
      tryLocalSignin()
    }, []);
  
  return <ActivityIndicator style={{marginTop:400}} size="large" color="#0000ff" />

}

export default TryLocalAuth