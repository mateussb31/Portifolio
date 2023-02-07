import React from "react";
import {WIDTH_TELA } from "../../settings/constants"

const Chao = (props: any) => {

    return (
        <div style={{
            position:"absolute",
            height:"25vh",
            width:WIDTH_TELA,
            bottom:0,
            zIndex:0,
            backgroundImage:`linear-gradient(360deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8855917366946778) 100%), url(${require("../images/chao.jpg")})`
        }} className="CHAO"></div>
    )
}
export default Chao