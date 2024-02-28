import React from "react";

const Card = () => {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col ">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
      <button type="button" className="btn btn-primary d-flex mb-3">Primary</button>
      </div>
    </div>
  </div>
  
</div>
        </>
    )
}

export default Card;
