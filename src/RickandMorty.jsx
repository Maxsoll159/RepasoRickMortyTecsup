import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import { getApi } from "./helpers/ApiRickMorty";

export const RickAndMorty = () =>{

    const [personajes, setPersonjes] = useState([])

    /*Creamos la variable del useNavigate*/
   /* const navigate = useNavigate(); */

    useEffect(()=>{
        getApi().then((pers)=>setPersonjes(pers.results))
    },[])

   /* const irPersonaje = (id) =>{
        navigate(`personaje/${id}`);
    }*/

    return(
        <>
            <div>
                <div>

                    {
                        personajes !== [] ? (
                            personajes.map((personaje, index)=>(
                                <div key={index}>
                                    <img src={personaje.image} alt="" />
                                    <h4>Nombre Personaes</h4>
                                    <h2>{personaje.name}</h2>
                                    <p>Genero:</p>
                                    <p>{personaje.gender}</p>
                                    <p>sdsd</p>
                                   {/* <button onClick={()=>irPersonaje(personaje.id)}>Ir a ver personaje</button> */}
                                   <Link to={`personaje/${personaje.id}`}>Ir Personajes</Link>
                                </div>
                            ))
                        ) : (<h1>Cargando</h1>)

                    }

                </div>
            </div>
        </>
    )
}