import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { HeaderAgendamento } from '../../../components/HeaderAgendamento/HeaderAgendamento'

import horarioImg from "../../../imagens/fundomain.jpg"

import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

import "./Time.css"
import { useAgendamentoContext } from '../../../context/AgendamentoContext'

export const Time = () => {

    const {agendamento, setAgendamento} = useAgendamentoContext()
    console.log(agendamento)

    const [horario, setHorario] = useState("")
    const [dia, setDia] = useState("")


    const navigate = useNavigate()

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); 
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear(); 

    var currentDate = `${day}/${month}/${year}`; // Format as "dd/mm/yyyy"

    useEffect(() => {
        setDia(currentDate)
    },[])


    // FUNÇÕES
    const updateHour = (e:any) =>{
        const element = e.target
        const hour = e.target.innerHTML

        if(horario != "" && horario == hour){


            element.classList.remove("selected")
            setHorario("")
        }
        else{
            document.querySelector(".selected")?.classList.remove("selected");
            element.classList.add("selected")
            setHorario(hour)
        }

        
    }

    const updateDay = (operator:string) => {

        const dayElement = document.querySelector("#dayValue")
       
        const today = new Date();
        const currentDay = dia.padStart(2, '0'); 
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const year = today.getFullYear(); 

        var newDay = 0

        if(operator == "+"){

            if(Number.parseInt(currentDay) < 31){
                newDay = Number.parseInt(currentDay) + 1
            }
            else{
                return
            }

            

        }
        else{

            if(Number.parseInt(currentDay) > 1){
                newDay = Number.parseInt(currentDay) - 1
            }
            else{
                return
            }
           
        }

        if(dayElement){
            const newDate = `${newDay}/${month}/${year}`;
            
            dayElement.innerHTML = newDate

            setDia(newDate)

        }

    }

    const handleFormSubmit = (e:any) => {
        e.preventDefault()

       if(agendamento && horario && dia){
            setAgendamento({
                tipoCorte : agendamento.tipoCorte,
                precoCorte: agendamento.precoCorte,
                horario: horario,
                dia: dia,
                dadosCliente: undefined,
        })
       }

       console.log(horario + "-" + dia)

        navigate("/agendamento/dados")
    }



  return (
    <>
      <HeaderAgendamento title='Escolha sua data e horário' bgImage={horarioImg}/>

      <form onSubmit={handleFormSubmit}>

        <section id="horario-box">
            <section id="horario">
                <div className='dataContainer'> 

                    <SlArrowUp onClick={() => updateDay("+")} />
                    <h1 id="dayValue">{currentDate}</h1>                  
                    <SlArrowDown onClick={() => updateDay("-")} />
                
                </div>

                <label > Horários Disponíveis: </label>
                <div id="input-time">
                
                    <p onClick={(e) => updateHour(e)} className="available-hour">8:00 - 9:00 </p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">9:00 - 10:00</p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">10:00 - 11:00</p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">11:00 - 12:00</p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">13:00 - 14:00</p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">14:00 - 15:00</p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">16:00 - 17:00</p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">17:00 - 18:00</p>
                    <p onClick={(e) => updateHour(e)} className="available-hour">18:00 - 19:00</p>
                    
                
                </div>

                <div>

                    <a id="previousDay">  </a>
                    <a id="nextDay">  </a>
                </div>

            </section>
        </section>

        <div id="botoes">
            <div id="botao-voltar"><a href="/agendamento/corte" > <span className="material-symbols-outlined" style={{fontSize:"68px"}}>
            arrow_circle_left
            </span></a> </div>

            <div id="botao-proximo">
               
                    <button type="submit">
                        <span className="material-symbols-outlined" style={{fontSize:"68px"}}>
                        arrow_circle_right
                        </span>
                    </button>
                   
            </div>
        </div>

        <input id="schedule" className="none" name="schedule" type="text"/>
      </form>
    </>
  )
}
