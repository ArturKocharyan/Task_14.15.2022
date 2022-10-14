import React from "react";
import './style.css'

function DivStyle({top,left,name}){
    let marginTop = top+5
    let marginLeft = left+30
    let URLOfCountrie = `https://pixabay.com/images/search/${name}/?manual_search=1`

    return(
        <div
        style={{
            width:"90px",
            height:'40px',
            backgroundColor:'rgb(250, 212, 0)',
            marginTop:marginTop,
            marginLeft: marginLeft,
            color:'white',
            borderRadius:'30px',
            textAlign: "center",
            padding:'10px'
        }}
        >{<a className="tag" href={URLOfCountrie}>{name}</a>}</div>
    )
}

export default DivStyle