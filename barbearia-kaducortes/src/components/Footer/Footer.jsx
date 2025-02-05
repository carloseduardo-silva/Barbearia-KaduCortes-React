import React from 'react'

export const Footer = () => {
  return (
    <footer>

    <div class="desktop aside-footer"> 
        <p class="bold"> Sobre sua compra na nossa loja online</p>
        <a href="#">Política de Frete</a>
        <a href="#">Política de Pagamentos</a>
        <a href="#">Política de Devolução e Troca</a>
        <a href="#">Política de Privacidade</a>
    </div>

    <div class="content-footer">
        <a  href="#"> Kadu Corte's </a>
        <div class="icons-div">

        
            <a target="_blank" href="https://www.instagram.com/kaducortes.ofc/">
                <img class="media-icon" src="/imagens/icons8-instagram-50.png" alt=""/>
            </a>

            <img class="media-icon" src="/imagens/icons8-spotify-30.png" alt=""/>

             <a  target="_blank" href="https://www.contate.me/barbearia-kaducortes"><img class="media-icon" src="/imagens/icons8-whatsapp2-50.png" alt=""/> </a>

        
        </div>
        <div>
            <p> Kadu Corte's Barbearia Ltda - Avenida Manoel Alves de Moraes, 101 - CEP 11441-105 - Guarujá - SP - Bairro Enseada</p>
            <p> TODOS OS DIREITOS RESERVADOS</p>
        </div>
    </div>

    <div class="mobile aside-footer"> 
        <p class="bold"> Sobre sua compra na nossa loja online</p>
        <a href="#">Política de Frete</a>
        <a href="#">Política de Pagamentos</a>
        <a href="#">Política de Devolução e Troca</a>
        <a href="#">Política de Privacidade</a>
    
    
    </div>

    <div  class="desktop right aside-footer">
        <p class="bold"> Podemos te Ajudar?</p>
        <a href="#contact">Contato</a>

    </div>

</footer>
  )
}
