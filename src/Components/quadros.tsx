import React from "react";

const Quadro = (props) => {

    return <div style={{
        backgroundColor:"brown",
        border:"10px solid black",
        position:"absolute",
        left: 705,
        top:130,
        width:290,
        height:350,
        opacity:0.9,
        borderTopLeftRadius:150,
        borderTopRightRadius:150,
        backgroundImage:`url(${"https://phonoteka.org/uploads/posts/2021-06/thumbs/1622858635_12-phonoteka_org-p-tekstura-dereva-mainkraft-krasivo-12.png"})`,
        backgroundSize:"100px 300px",
        zIndex:-0
    }
    }>
        IMAGEM XYZ

    </div>

}
export default Quadro