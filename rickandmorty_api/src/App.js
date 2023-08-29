import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Character from './Components/Character/Character'

function App() {

  //TENEMOS NUESTRA L+OGICA
//LE INDICO QUE MI ESTADO ESTA VACIO Y QUE SE VA A LLEVAR /POBLAR DE LOS DATOS QUE VIEBE EN LA API
  const [character, setResults] = useState([])
  //fetch("https://rickandmortyapi.com/api/character")
  //.then(response =>  response.json())
  //.then(data => console.log(data))
  //.catch(error => console.log(error)) 
//INDIco la ruta o el endpoint de la api
  const URI = "https://rickandmortyapi.com/api/character"
  
  const getCharacters = (URI) => {
    fetch(URI)
    //esta respuesta la tenemos que convertir  a un objeto de js
    .then((response) => response.json())
    .then(data => setResults(data.results))
    .catch((error) => console.log(error)) 
  }
  
  //CON DEPENDECIA VACIA, LA LLAMADA SE EEJECUTA UNA VEZ RN LO QUE SE CARGA MI COMPONENTE
  // Y SE RENDERIZA
  useEffect(() => {
    getCharacters(URI) //CUANDO SE CARGUE EL COMPONENTE, LLAMA AL METODO Y EJECUTA LA FUNCION ANTERIOR.
  }, [] )
  
 // TENEMOS NUESTROS COMPONENTES

 return (
  <>
   <Navbar brand="Rick and Morty"/>
  </>
);
}

export default App;