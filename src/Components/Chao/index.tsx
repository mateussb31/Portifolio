import React from "react";
import {ELinks,X_ITEM } from "../../settings/constants.ts"

const Chao = (props) => {

    return (
        <div style={{
            position:"absolute",
            height:"25vh",
            width:(ELinks.length+1)*X_ITEM,
            bottom:0,
            backgroundImage:`linear-gradient(360deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8855917366946778) 100%), url(${require("../images/chao.jpg")})`
        }} className="CHAO"></div>
    )
}
export default Chao