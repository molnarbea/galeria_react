import type { KepTipus } from "../adat";
import './NagyKep.css'

interface NagyKepProps{
    kepem: KepTipus
}

export default function NagyKep({kepem}:NagyKepProps){

    return(
        <>
            <div className="nagyKep">
                <img className="NagyKep" src={`${import.meta.env.BASE_URL}${kepem.kep}`} alt={kepem.felirat} />
                <p>{kepem.felirat}</p>
            </div>
        </>
    )
}