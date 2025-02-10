import { HeaderAgendamento } from '../../../components/HeaderAgendamento/HeaderAgendamento'
import { useAgendamentoContext } from '../../../context/AgendamentoContext'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import corteImg from "../../../imagens/fundo3.jpg"

import "./HaircutType.css"

export const HaircutType = () => {

  const {setAgendamento} = useAgendamentoContext()
  
  const[corte, setCorte] = useState([""])
  const [precoCorte, setPrecoCorte] = useState(0)

  const navigate = useNavigate()

  var tipoCorteArr:string[] = []


  //eventos
  const handleFormSubmit = (e :any) => {
    e.preventDefault()

    if(corte[0] == "" && corte.length == 1){
      return window.alert("Selecione um serviço")

    }
    
    setAgendamento({
          tipoCorte : corte,
          precoCorte,
          horario: "",
          dia: "",
          dadosCliente: undefined,
    })

    navigate("/agendamento/horario")
    
  }

  const toggleService = (e:any) =>{

    const service = e.target.innerHTML
    const element = e.target


    if (tipoCorteArr.includes(service)){
      //caso houver no array -> remove-lo
      element.classList.remove("selected")

      tipoCorteArr = tipoCorteArr.filter((corte) => corte != service)
      setCorte(tipoCorteArr)
      updatePreco(service, "-")

    }
    else{
      //caso não houver no array -> adiciona-lo
      element.classList.add("selected")

      tipoCorteArr.push(service)
      setCorte([...corte, service])
      updatePreco(service, "+")
    }

  }

  const updatePreco = (service:string, operator:string) =>{

    switch(service){
      case "CORTE CABELO":
        if(operator == "+"){
          var newPreco = precoCorte + 30;
          setPrecoCorte(newPreco)
        }else{
          var newPreco = precoCorte - 30;
          setPrecoCorte(newPreco)
        }
        break

      case "FAZER A BARBA":
        if(operator == "+"){
          var newPreco = precoCorte + 20;
          setPrecoCorte(newPreco)
        }else{
          var newPreco = precoCorte - 20;
          setPrecoCorte(newPreco)
        }
        break

      case "PINTURA":
        if(operator == "+"){
          var newPreco = precoCorte + 40;
          setPrecoCorte(newPreco)
        }else{
          var newPreco = precoCorte - 40;
          setPrecoCorte(newPreco)
        }
        break

      case "SOMBRANCELHA":
          if(operator == "+"){
            var newPreco = precoCorte + 5;
            setPrecoCorte(newPreco)
          }else{
            var newPreco = precoCorte - 5;
            setPrecoCorte(newPreco)
          }
          break
    }

  }

  return (
    <>
    <HeaderAgendamento title="Escolha o serviço" bgImage={corteImg}/>

    <h2>SELECIONE OS SERVIÇOS DESEJADOS</h2>

    <form onSubmit={handleFormSubmit}>

      <section id="servicos">

  <div id="servicos-filho">

    
      <button onClick={(e) => toggleService(e)} id="corte" type="button" className="btn">CORTE CABELO</button>

      <button onClick={(e) => toggleService(e)} id="barba" type="button" className="btn">FAZER A BARBA</button>

      <button onClick={(e) => toggleService(e)} id="pintura" type="button" className="btn mouseover">PINTURA</button>

      <button onClick={(e) => toggleService(e)} id="sombrancelha" type="button" className="btn">SOMBRANCELHA</button>

    

    
  </div>

      </section>

      <div id="botoes-servico">
        
          
          <div id="corte-marcar">
              <a href="/agendamento/horario" > 
              <button type='submit'> <span className="material-symbols-outlined" style={{fontSize:"68px"}}>
              arrow_circle_right
              </span></button>
              </a> 
          </div>
      </div>


    </form>
   
    
    </>
  )
}
