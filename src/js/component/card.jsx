import React from "react"

const Card = () =>{
  return (
    
  <div className="card-group text-center">
  <div className="card mx-3">
    <img className="card-img-top" src="https://picsum.photos/101/300" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href ="#" className="btn btn-primary text-center">Go somewhere</a>
    </div>
  </div>
  <div className="card mx-3">
    <img className="card-img-top" src="https://picsum.photos/100/300" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <a href ="#" className="btn btn-primary text-center">Go somewhere</a>
    </div>
  </div>
  <div className="card mx-3">
    <img className="card-img-top" src="https://picsum.photos/102/300" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div className="card mx-3">
    <img className="card-img-top" src="https://picsum.photos/103/300" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a href ="#" className="btn btn-primary text-center">Go somewhere</a>
    </div>
</div>
</div>
)
}

export default Card;