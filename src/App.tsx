
import { useState } from 'react'
import './App.css'
import { KEPLISTA, type KepTipus } from './adat'
import Galeria from './component/Galeria'

function App() {

  const [lista, setLista] = useState<KepTipus[]>(KEPLISTA)

  function kivalasztKezelo(index: number){
    console.log(index)

    const ujLista: KepTipus[] = [...lista]
    ujLista[index].nagyKep = true
    setLista(ujLista)
  }

  return (
    <>
      <header>
        <h1>Galéria</h1>
      </header>

      <article>
        <Galeria lista={lista} kivalasztKezelo={kivalasztKezelo}/>
      </article>
    </>
  )
}

export default App
