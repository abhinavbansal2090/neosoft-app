function Cake(props) {
if(props.data){
    return (
      <div class="card" style={{width: "18rem"}}>
      <img src={props.data.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.data.name}</h5>
          <p class="card-text">{props.data.price}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
 }
}

export default Cake
