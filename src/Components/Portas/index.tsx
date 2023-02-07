import React, { forwardRef } from "react";
interface IProps
{
    posicao: number
}
const Porta : React.ForwardRefRenderFunction<HTMLDivElement,IProps> = (props:IProps, ref) => {
    return (
        <div ref={ref}style={{
            backgroundImage:`url(${require("../images/porta.png")})`,
            backgroundPositionY:15,
            backgroundRepeat:"no-repeat",
            width:375,
            height:375,
            order:props.posicao
        }}>
        </div>
    )
}
export default forwardRef(Porta)