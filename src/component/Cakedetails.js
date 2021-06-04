import {useState} from "react"
//import React from 'react';
import axios from 'axios'
import { useEffect } from "react"
import Cake from "./Cake"
import {useParams} from "react-router-dom"

function Cakedetails(props){
  var params = useParams()
  var url = "http://apibyashu.herokuapp.com/api/cake/"+params.cakeid
  var [searchcakes,setList] = useState([])

  useEffect(()=>{
  axios({
    url:url,
    method:"get",
  }).then((response)=>{
    setList([response.data.data])
  },(error)=>{
    console.log(error)
  })
  },[])
  return(
    <>
    {searchcakes.map((each,index)=>{
      return(
        <Cake data={each} Key={index} />)
    })}
    </>


  )


}

export default Cakedetails
