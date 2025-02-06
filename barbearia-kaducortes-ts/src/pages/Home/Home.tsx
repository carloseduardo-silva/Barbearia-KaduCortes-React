import about from "../../imagens/about-img4.jpg"
import corte1 from "../../imagens/WhatsApp Image 2022-07-13 at 14.48.55.jpeg"
import corte2 from "../../imagens/corte2.jpg"
import corte3 from "../../imagens/WhatsApp Image 2022-07-13 at 14.48.38.jpeg"
import corte4 from "../../imagens/WhatsApp Image 2022-07-13 at 14.48.20.jpeg"
import corte5 from "../../imagens/WhatsApp Image 2022-07-13 at 14.52.08.jpeg"
import corte6 from "../../imagens/corte1.jpg"
import whatsappIcon from "../../imagens/icons8-whatsapp-24.png"

//styles
import "./Home.css"

//components
import { Header } from '../../components/Header/Header'
import { Nav } from '../../components/Nav/Nav'
import { Footer } from '../../components/Footer/Footer'

export const Home = () => {
  return (
    <>

      <Nav/>

      <Header/>

      <section id="about">
    
    <div  className="foto"> <img src={about} alt=""/></div>
    
    <div  id="content">
        <h1 className=""> SOBRE NÓS </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, doloribus ea sed natus eveniet ex facere quae dolores impedit voluptatem magnam officia beatae, mollitia eum neque necessitatibus reiciendis laborum eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, aspernatur, molestias minus similique quibusdam saepe nam impedit veniam ratione quos consequuntur, repudiandae deleniti quidem odit minima omnis dolor dicta! Nobis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae consectetur molestias nobis!</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, doloribus ea sed natus eveniet ex facere quae dolores impedit voluptatem  </p>
    </div>
      </section>

      <section  id="services">
          <h1>SERVIÇOS </h1>

          <div className="row">
              <div>CORTE</div>  R$20 </div>

          <div className="row">
              <div>BARBA</div>  R$15 </div>
              
          <div className="row">
              <div>SOMBRANCELHA</div>  R$5 </div>
          
          <div className="row">
              <div>PIGMENTAÇÃO</div>  R$10 </div>

              

      </section>


      <section  id="galeria">

          <h1 className="">GALERIA</h1>

          <div className="mainDiv-photo">
          
              <div className="div-photo">
          
                  <img src={corte1} alt="corte"/>
                  <img src={corte2} alt="corte"/>
                  
          
              </div>
          
              <div className="div-photo">
          
                  <img src={corte3} alt="corte"/>
                  <img src={corte4} alt="corte"/>
                  
          
              </div>
          
              <div className="div-photo">

                  <img src={corte5} alt=""/>
                  <img src={corte6} alt=""/>
                  
                  
          
              </div>
          </div>
      
      </section>


      <section id="contact">

          <h1 className=""> CONTATO </h1>

          <form id="form-contact">

                  <div className="name-info">
                      <input type="text" name="name" id="name" placeholder=" Nome *"/>
                      <input type="text" name="tel" id="tel" placeholder=" Celular"/>
                  </div>

                  
                  <div className="email-info">
                      <input type="text" name="email" id="email" placeholder=" Email *"/>
                      
                  </div>

                  <div className="message-info">
                    <input name="message" id="message" type="text" placeholder=" Mensagem"/>
                  
                  </div>

                  <input style={{border:"none", padding:"6px 0px"}} id="submit-formContact" type="submit" value="ENVIAR"/>

              
              
              

              
            </form>
          
      </section>


      <section  id="secondary-contact" >

          
          <div id="contato-content">
              
                  <h1 className="contact-title"> ENTRE EM CONTATO COM A GENTE!</h1>

                  <p> Entre em contato com a Barbearia KaduCortes's. Nós queremos te ajudar a implementar o seu estilo. </p>

                  <button>
                      <img src={whatsappIcon} alt=""/>

                      <a target="_blank" href="https://www.contate.me/barbearia-kaducortes">Agende pelo Whatsapp</a>
                  </button>
                  
              
                
            </div>
            

          <div id="contato-infos">
          
              
              <div className="row-contato">
                  <span  style={{color:"#f5b802f8"}} className="material-symbols-outlined">
                      location_on
                      </span>
                  <a target="_blank" href="https://www.google.com.br/maps/place/Av.+Manoel+Alves+de+Moraes,+101+-+Balneario+Cidade+Atlantica,+Guaruj%C3%A1+-+SP,+11441-105/@-23.9765487,-46.2320319,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce00200acde5fd:0x9d491fdaedc90a84!8m2!3d-23.9765487!4d-46.2294516!16s%2Fg%2F11fzfdbr1d?entry=ttu"> Avenida Manoel Alves de Moraes - 101 - Guarujá - SP</a>
              </div>
              
          
              <div className="row-contato">
                  <span style={{color:"#f5b802f8"}} className="material-symbols-outlined">
                      call
                      </span>
                  <p> Segunda a Sábado 09:00H ás 21:00H</p>
              </div>

              <div className="row-contato">

                
                  <span style={{color:"#f5b802f8"}} className="material-symbols-outlined">
                      share
                      </span>

                  <a target="_blank" href="https://www.instagram.com/kaducortes.ofc/">
                      <p>@barbeariaKaduCorte's</p>
                  </a>
              </div>


          </div>
                
              


      </section>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.5443161459125!2d-46.22945160000003!3d-23.97654869999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce00200acde5fd%3A0x9d491fdaedc90a84!2sAv.%20Manoel%20Alves%20de%20Moraes%2C%20101%20-%20Balneario%20Cidade%20Atlantica%2C%20Guaruj%C3%A1%20-%20SP%2C%2011441-105!5e0!3m2!1spt-BR!2sbr!4v1689080839603!5m2!1spt-BR!2sbr" width="100%" height="100%"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <Footer/>
    
    </>
  )
}
