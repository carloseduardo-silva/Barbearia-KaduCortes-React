import React from 'react'
import "./Nav.css"

export const Nav = () => {
  return (
     
    <div id="nav-fixed">

        <nav>
            <div id="mobile-nav">
                <a id="logo" href="#"> Kadu Corte's </a>

                <span id="menu-hamburguer" className="material-symbols-outlined">
                    menu </span>
            </div>

            <ul id="menu" className="none">
                <li> <a href="#about"> SOBRE NÓS </a> </li>
                <li> <a href="#services"> SERVIÇOS</a> </li>
                <li> <a href="#galeria"> GALERIA </a> </li>
                <li> <a  target="_blank" href="agendamento/haircutType.html"> AGENDE </a></li>
                <li className="li-mais">
                    <a id="btn-mais" href="#"> MAIS </a>

                   
                </li>

                <li className="li-icons"> 
                    <div className="nav-icons">
                        <a target="_blank" href="https://www.instagram.com/kaducortes.ofc/">
                            <img className="media-icon" src="/imagens/icons8-instagram-50.png" alt=""/>
                        </a>
                      <a  target="_blank" href="https://www.contate.me/barbearia-kaducortes"><img className="media-icon" src="/imagens/icons8-whatsapp2-50.png" alt=""/> </a>
                    </div>
                </li>
        
            </ul>
            <div className="none" id="nav-mais"> 
                <a href="#contact">Contato</a> 
                <a href="#secondary-contact">Localização</a>
                <a href="#">Trabalhe Conosco</a>
               
            </div>
        
        </nav>

    </div>
  )
}
