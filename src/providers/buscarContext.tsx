import { createContext, ReactNode, useContext, useState } from "react";

export type authContextType = {
    inputEncontreArtigo: string;
    setInputEncontreArtigo: (value: string) => void;

    inputEmail: string;
    setInputEmail: (value: string) => void;

    enviarEmail: (value: string) => void;
};

const buscarContextDefaultValues: authContextType = {
    inputEncontreArtigo: "",
    setInputEncontreArtigo: (e: string) => { },

    inputEmail: "",
    setInputEmail: (value: string) => { },

    enviarEmail: (value: string) => { },

};

const BuscarContext = createContext<authContextType>(buscarContextDefaultValues);

type Props = {
    children: ReactNode;
};

export function BuscarProvider({ children }: Props) {
    const [inputEncontreArtigo, setInputEncontreArtigo] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    function enviarEmail(email: string) {
        console.log(email) //Post para wordpress enviar email

        setInputEmail("") //Limpar input
    } 

    const value = {
        inputEncontreArtigo,
        setInputEncontreArtigo,
        inputEmail,
        setInputEmail,
        enviarEmail,
    }



  

    return (
        <>
            <BuscarContext.Provider value={value}>
                {children}
            </BuscarContext.Provider>
        </>
    );
}

export function useBuscar() {
    return useContext(BuscarContext);
}
