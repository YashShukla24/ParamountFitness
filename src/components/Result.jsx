import React from "react";
const Result = (props) => {
    const img =`https://source.unsplash.com/700x400/?${props.name}`;
    return(
        <>
        <div>
            <img src={img} alt="..." style={{paddingTop:"20px",inline:"center"}}/>
        </div>
        </>

    )
}
export default Result;