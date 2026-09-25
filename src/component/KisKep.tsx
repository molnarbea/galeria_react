import type { KepTipus } from "../adat";
import './KisKep.css'

interface KisKepProps{
    kepem: KepTipus,
    index: number,
    kivalasztKezelo:(index:number)=>void
}

export default function KisKep({kepem,index,kivalasztKezelo}:KisKepProps){

    return(
        <>
        <div className="kisKep">
            <img onClick={()=>{kivalasztKezelo(index)}} className="KisKep" src={`${import.meta.env.BASE_URL}${kepem.kep}`} alt={kepem.felirat} />
        </div>
        </>
    )
}