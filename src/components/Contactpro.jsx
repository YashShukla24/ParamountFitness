import React from "react";
import { useState } from "react";

const Contactpro = () => {
    const[data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const inputEvent = (event) => {
        const {name,value} = event.target;
        setData ((preval) => {
            return{
                ...preval,
                [name] :value,
            }
        })
    }
    const formSubmit = (e) =>{
e.preventDefault();
alert(
    `  fullname : ${data.fullname}.
     phone number : ${data.phone}.
     email : ${data.email}.
     message : ${data.msg}.`
);


    };



    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className-="col-md-6 col-10 mx-auto ">
                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your full name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">phone number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your phone number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} placeholder="send message if you want!" ows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>

                            </div>



                        </form>

                    </div>

                </div>
            </div>

        </>


    );
};
export default Contactpro;