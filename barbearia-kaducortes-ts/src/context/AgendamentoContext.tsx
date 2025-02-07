import React, { createContext, useContext, useState, ReactNode } from "react";

//tipagem dados do cliente usada na tipagem posterior
export interface clientData{
    nome: string;
    email: string;
    tel: string;
    
}

//tipagem agendamento
export interface agendamentoData{
    tipoCorte: string[];
    precoCorte: number;
    horario: string;
    dia: string;
    dadosCliente:clientData | undefined
}

//tipagem do contexto
export interface AgendamentoContextType{
    agendamento: agendamentoData | undefined;
    setAgendamento:React.Dispatch<React.SetStateAction<agendamentoData | undefined>>
}

//valor default do estado tipado
const defaultAgendamentoDataContext: AgendamentoContextType = {
    agendamento:undefined,
    setAgendamento:() =>{}
}

//criar contexto
const AgendamentoContext = createContext<AgendamentoContextType>(defaultAgendamentoDataContext)

//função que utiliza o contexto
export const useAgendamentoContext = () =>{
    return useContext(AgendamentoContext)
}

//tipagem das props
interface AgendamentoDataProviderProps {
    children: ReactNode
}

export const AgendamentoProvider:React.FC<AgendamentoDataProviderProps> = ({children}) =>{

    const [agendamento, setAgendamento] = useState<agendamentoData|undefined>(undefined)

   return(
    <AgendamentoContext.Provider value={{agendamento, setAgendamento}}>
        {children}
    </AgendamentoContext.Provider>
   )

}
