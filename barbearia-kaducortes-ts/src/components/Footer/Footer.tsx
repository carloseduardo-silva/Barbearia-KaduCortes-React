import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <footer>

    <div className="desktop aside-footer"> 
        <p className="bold"> Sobre sua compra na nossa loja online</p>
        <a href="#">Política de Frete</a>
        <a href="#">Política de Pagamentos</a>
        <a href="#">Política de Devolução e Troca</a>
        <a href="#">Política de Privacidade</a>
    </div>

    <div className="content-footer">
        <a  href="#"> Kadu Corte's </a>
        <div className="icons-div">

        
            <a target="_blank" href="https://www.instagram.com/kaducortes.ofc/">
                <img className="media-icon" src="/imagens/icons8-instagram-50.png" alt=""/>
            </a>

            <img className="media-icon" src="/imagens/icons8-spotify-30.png" alt=""/>

             <a  target="_blank" href="https://www.contate.me/barbearia-kaducortes"><img className="media-icon" src="/imagens/icons8-whatsapp2-50.png" alt=""/> </a>

        
        </div>
        <div>
            <p> Kadu Corte's Barbearia Ltda - Avenida Manoel Alves de Moraes, 101 - CEP 11441-105 - Guarujá - SP - Bairro Enseada</p>
            <p> TODOS OS DIREITOS RESERVADOS</p>
        </div>
    </div>

    <div className="mobile aside-footer"> 
        <p className="bold"> Sobre sua compra na nossa loja online</p>
        <a href="#">Política de Frete</a>
        <a href="#">Política de Pagamentos</a>
        <a href="#">Política de Devolução e Troca</a>
        <a href="#">Política de Privacidade</a>
    
    
    </div>

    <div  className="desktop right aside-footer">
        <p className="bold"> Podemos te Ajudar?</p>
        <a href="#contact">Contato</a>

    </div>

</footer>
  )
}
