import React from "react";

const Footerpro = () => {
    const year = new Date().getFullYear();
    return(
        <>
       <footer className="w-100 bg-light text-center">
           <p>  © {year} Paramount Fitness . All Rights Reserved | Terms and Condtions</p>
       </footer>
       
        </>

    );
};
export default Footerpro;