import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"
const Navbarpro = () => {
    return (
        <>
            <div className="navbarpro">
                <div //className="container-fluid nav-bg"\\
                    style={{
                        //   backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                        //   backgroundPosition: 'center',
                        //   backgroundSize: 'cover',
                        //   backgroundRepeat: 'no-repeat'
                        backgroundColor: "whitesmoke",
                    }}
                >
                    <div className="row">

                        <div className="col-10 mx-auto">


                            <nav className="navbar navbar-expand-lg navbar-light bg-red  " >
                                <NavLink className="navbar-brand" to="/"> PARAMOUNT FITNESS</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <NavLink activeClassName='menu_active' exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink >
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink >
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/service">Service</NavLink >
                                        </li>


                                    </ul>

                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default Navbarpro;