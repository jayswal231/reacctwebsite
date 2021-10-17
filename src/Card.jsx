import React from 'react';
import { NavLink } from "react-router-dom";


function Card(props) {
    return(
    <>
     
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imagesrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.details}</p>
                    <NavLink to="#" className="btn btn-primary">Get in Touch</NavLink>
                </div>
            </div>
        </div>
             
   </>
    )
}
export default Card;