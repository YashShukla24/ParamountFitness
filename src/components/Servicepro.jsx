import React from "react";
import Commoncardpro from "./Commoncardpro"
import Carddatapro from "./Carddatapro";
const Servicepro = () => {
    return (
        <>
            <div className="my-5">
                <h1 className=" text-center"> Our Services</h1>

            </div>
            <div className="container-fluid nav_bg mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-3">
                        {
                            Carddatapro.map((val,ind) => {
                                return <Commoncardpro
                                key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                />
                               
                                
                            })
                        }
                           
                        </div>
                    </div>

                </div>

            </div>


        </>


    );
};
export default Servicepro;