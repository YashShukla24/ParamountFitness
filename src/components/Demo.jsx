import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Demo = () => {
    return (
        <>
            <nav style={{
                marginLeft: '30px', backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNUUN6gdSV4RTMHdo9Dffp_x1UT6DfweifsQ&usqp=CAU" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                
                , marginTop: '10px', marginRight: '30px'
            }} class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </>

    );
};
export default Demo;