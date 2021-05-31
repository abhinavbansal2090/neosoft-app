import list from "./data"
import Cake from "./Cake"

function Map(){
  return(
    <div className="row">
    {list.map((each,index)=>{
      return(
        <Cake data={each} Key={index} />)
    })}
    </div>
  )
}

export default Map
