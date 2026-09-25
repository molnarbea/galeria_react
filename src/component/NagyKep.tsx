import type { KepTipus } from "../adat";

interface NagyKepProps{
    kepem: KepTipus,
    index: number
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