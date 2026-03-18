'use client';

import { createContext, ReactNode, useContext, useState } from "react";

type ListaContextType = {
    lista: number[],
    addLista : (item:number) => void;
    deleteFromLista : (item:number) => void ;
}
// lo que tipamos en un contexto se tiene que llamar igual en todas partes 

const ListaContext = createContext<ListaContextType | null>(null)

export const ListaProvider = ({children}: {children:ReactNode}) =>{
    // tiene que llamarse exactamente igual que lo que hemos tipado arriba 
    const [lista, setLista] = useState<number[]>([])
    const addLista = (item:number) => {
        setLista([...lista,item]);
    };

    const deleteFromLista = (item:number) =>{
        setLista(lista.filter(x=> x !== item))
    };

    return (
        <ListaContext.Provider value={{lista,addLista,deleteFromLista}}>
                {children}

        </ListaContext.Provider>
    )
}

export const useLista = () => {
    const context = useContext(ListaContext);
    if(!context){
        throw new Error("tsx out of lista context");

    }
    return context;
}