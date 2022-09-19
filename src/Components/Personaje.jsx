import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getApiId } from "../helpers/ApiRickMorty";

export const Personaje = () =>{
    let {id} = useParams();
    const [personajeUnico, setPersonajeUnico] = useState([])
    useEffect(()=>{
        getApiId(id).then((perId)=>setPersonajeUnico(perId))
    },[id])
    return(
        <>
            <div>
                {
                    personajeUnico !== [] ? (
                        <div>
                            <img src={personajeUnico.image} alt="" />
                            <h1>{personajeUnico.name}</h1>
                        </div>

                    ) : (<h1>Cargando....</h1>)
                }
            </div>
        </>
    )
}