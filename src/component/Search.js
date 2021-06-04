import querystring from "query-string"
import {useState} from "react"
//import React from 'react';
import axios from 'axios'
import { useEffect } from "react"
import Cake from "./Cake"

function Search(props){

var searchstring = querystring.parse(props.location.search)
var url = "https://apibyashu.herokuapp.com/api/searchcakes?q="+searchstring.q
var [searchcakes,setList] = useState([])
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
    {searchcakes.map((each,index)=>{
      return(
        <Cake data={each} Key={index} />)
    })}
  </>
)

}

export default Search
