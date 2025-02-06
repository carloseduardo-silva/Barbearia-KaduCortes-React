import * as React from "react"
import "./HeaderAgendamento.css"

export interface HeaderAgendamentoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{

    title:string,
    bgImage: string
}

export const HeaderAgendamento:React.FC<HeaderAgendamentoProps> = ({title, bgImage}) => {
  return (
    <>
     <nav>

      
        <span id="menu-hamburguer" className="material-symbols-outlined">menu </span>


        <div id="list">
        <ul className="nav nav-tabs">
            <li  role="presentation"><a href="#">HOME</a></li>
            <li role="presentation"><a href="about.html">SOBRE</a></li>
            <li role="presentation"><a href="haircuts.html">SERVIÇOS</a></li>
            <li role="presentation"><a href="#">CONTATO</a></li>
        </ul>
        </div>


    </nav>

    <section id="image" style={{backgroundImage:`url("${bgImage}")`}}>
    <div id="center"> <p>{title}</p></div>

    </section>
    </>
  )
}
