import React from "react";
import { EDeco, WIDTH_ITEM_CENARIO } from "../../settings/constants";

export default function Decoracao  (props: any) {
    // const [cordenadas, setCordenadas] = useState({})
    //     const measuredRef=useCallback((node:HTMLDivElement) =>{
    //         if(node!==null){
    //             setCordenadas(node.getBoundingClientRect());
    //         }
    //     },[])
    return (
    <>
        <div style={{
            backgroundImage:`url(${require("../../Components/images/"+EDeco[props.tipo].url)})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:EDeco[props.tipo].tamanho,
            width:WIDTH_ITEM_CENARIO,
            height:EDeco[props.tipo].height,
            order:props.posicao,
            alignSelf:EDeco[props.tipo].alinhamento,
            
        }}>
        </div>
    </>    
    )
    // d
}
