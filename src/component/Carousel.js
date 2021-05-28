function Carousel() {
  return (
    <div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" style={{height:"500px"}}>
          <img src="https://cdn.shopify.com/s/files/1/0513/2409/files/gadgets_time_01.jpeg?v=1497403238" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" style={{height:"500px"}}>
        <img src="https://static.toiimg.com/thumb/msid-31346158,width-748,height-499,resizemode=4,imgsize-114461/.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" style={{height:"500px"}}>
        <img src="https://thumbs.dreamstime.com/b/technical-support-customer-service-business-technology-internet-concept-154148058.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Carousel
