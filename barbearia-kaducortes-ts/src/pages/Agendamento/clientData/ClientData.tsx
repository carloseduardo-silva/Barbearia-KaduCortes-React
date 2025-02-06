import React from 'react'

import "./ClienteData.css"

import dadosImg from "../../../imagens/fundo2.jpg"

import { HeaderAgendamento } from '../../../components/HeaderAgendamento/HeaderAgendamento'

export const ClientData = () => {
  return (
    <div className='clientData_container'>
      <HeaderAgendamento title='Dados do Cliente' bgImage={dadosImg}/>
      <h2> INSIRA ABAIXO AS INFORMAÇÕES SOBRE VOCÊ</h2>
  
      <form id="form" name="form" className="client-info">
          
          <div className="form-div">

            <div className="form-group">
              <label className="col-sm-2 control-label">Nome</label>
              <div className="col-sm-10">
                <input required type="name" className="form-control" id="nome" placeholder="Nome" name="name"/>
              </div>
            </div>

            <div className="form-group">
              <label  className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input required type="email" className="form-control" id="email" placeholder="Email" name="email"/>
              </div>
            </div>
          
            <div className="form-group">
                <label  className="col-sm-2 control-label">Telefone</label>
                <div className="col-sm-10">
                  <input required type="telefone" className="form-control" id="telefone" placeholder="Telefone" name="telephone"/>
                </div>
              </div>
          </div>

            <input className="none" name="service" id="service" type="text"/>
            <input className="none" name="date" id="date" type="text"/>
            <input className="none" name="time" id="time" type="text"/>


          <div id="botoes">
      
            <div id="botao-voltar">
              <a href="/agendamento/horario"> <span className="material-symbols-outlined"  style={{fontSize:"68px"}}>arrow_circle_left</span> </a> </div>
        
            <div id="botao-marcar">
              
                <a  href="/agendamento/confirmado">
                  <span className="material-symbols-outlined" style={{fontSize:"68px"}}>
                  arrow_circle_right
                  </span>
                </a>
            
            </div>
            
          
          </div> 
      </form>
    </div>
  )
}
