import type { KepTipus } from "../adat";
import KisKep from "./KisKep";

interface ListaProps{
    lista: KepTipus[],
    kivalasztKezelo:(index:number)=>void
}

export default function Galeria({lista,kivalasztKezelo}:ListaProps){
    return(
        <>
            {
                lista.map((e,i)=>{
                    return <KisKep kepem= {e} key={i} index={i} kivalasztKezelo={kivalasztKezelo}/>
                })
            }
        </>
    )
}