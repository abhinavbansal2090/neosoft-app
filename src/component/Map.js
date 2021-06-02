//import list from "./data"
import Cake from "./Cake"
import {useState} from "react"
//import React from 'react';
import axios from 'axios';
import { useEffect } from "react";


function Map(){
  var url = "https://apibyashu.herokuapp.com/api/allcakes"
  var [allcakes,setList] = useState([])
  useEffect(()=>{
  axios({
    url:url,
    method:"get",
  }).then((response)=>{
    setList(response.data.data)
  },(error)=>{
    console.log(error)
  })
},[])
  return(
    <div className="row">
    {allcakes.map((each,index)=>{
      return(
        <Cake data={each} Key={index} />)
    })}
    </div>
  )
}

export default Map
