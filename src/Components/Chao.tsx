import React from "react";
import "./teste.css"
import {ELinks,X_ITEM } from "../settings/constants.ts"

const Chao = (props) => {

    return (
        <div style={{
            position:"absolute",
            height:"25vh",
            width:(ELinks.length+1)*X_ITEM,
            bottom:0,
        }} className="CHAO"></div>
    )
}
export default Chao