export const getApi = async() =>{
    let response = await fetch("https://rickandmortyapi.com/api/character")
    let personajes = await response.json();
    return personajes
}


export const getApiId = async(id) =>{
    let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    let personajes = await response.json();
    return personajes
}