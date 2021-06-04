//import list from "./data"
import Cake from "./Cake"
import {useState} from "react"
//import React from 'react';
import axios from 'axios';
import { useEffect } from "react";
import Navbar from "./Navbar"


function Map(){
  var details = {
    projectname:"technical shop",
    projectdetails:"related to tech gadegts"
  }

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
    <>
    <Navbar   details= {details}></Navbar>
    <div className="row" style={{marginTop:"25px"}}>
    {allcakes.map((each,index)=>{
      return(
        <Cake data={each} Key={index} />)
    })}
    </div>
    </>
  )
}

export default Map
