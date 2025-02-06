import { HeaderAgendamento } from '../../../components/HeaderAgendamento/HeaderAgendamento'

import corteImg from "../../../imagens/fundo3.jpg"

import "./HaircutType.css"

export const HaircutType = () => {
  return (
    <>
    <HeaderAgendamento title="Escolha o serviço" bgImage={corteImg}/>

    <h2>SELECIONE OS SERVIÇOS DESEJADOS</h2>
<section id="servicos">

    <div id="servicos-filho">

        <button id="corte" type="button" className="btn">CORTE CABELO</button>

        <button id="barba" type="button" className="btn">FAZER A BARBA</button>
        
        <button id="pintura" type="button" className="btn mouseover">PINTURA</button>

        <button id="sombrancelha" type="button" className="btn">SOMBRANCELHA</button>
</div>

</section>

<div id="botoes">
       
        
        <div id="corte-marcar">
            <a href="/agendamento/horario" > <span className="material-symbols-outlined" style={{fontSize:"68px"}}>
            arrow_circle_right
            </span>
        </a> 
        </div>
</div>
    
    </>
  )
}
