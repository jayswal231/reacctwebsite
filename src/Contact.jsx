import React, { useState } from "react";



const Contact = () =>{
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: "",
    });

    const InputEvent = (event) =>{
       const {name, value } = event.target;
       setData((preVal) => {
           return {
               ...preVal,
           [name]: value,
           }
       })
    }
    const formSubmit = (e) =>{ 
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. my mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message}`);
    };
    
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Contact Number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your Email" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="exampleInputEmail1" rows="3" name="message" value={data.message} onChange={InputEvent} />
                        </div>
                        <button type="submit" className="btn btn-primary  mb-5">Submit</button>
                        </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;