import React, { useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Character from './Components/Character/Character'
import Pagination from './Components/Pagination/Pagination'
function App() {

  //TENEMOS NUESTRA L+OGICA
// Con los corchetes [] LE INDICO QUE MI ESTADO ESTA VACIO Y QUE SE VA A LLEVAR /POBLAR DE LOS DATOS QUE VIEBE EN LA API
  const [character, setResults] = useState([]) //Ele
  const [info, setInfo] = useState ({})
  //fetch("https://rickandmortyapi.com/api/character")
  //.then(response =>  response.json())
  //.then(data => console.log(data))
  //.catch(error => console.log(error)) 

//INDIco la ruta o el endpoint de la api
  const URI = "https://rickandmortyapi.com/api/character"
  
  const getCharacters = (URI) => { //getCharater es un método
    fetch(URI)
    //esta respuesta la tenemos que convertir  a un objeto de js
    .then((response) => response.json())
    .then(data => setResults(data.results)) // los 'results' es del api el 'data' es el nombre d ela variable que almacena ese  result.
    .catch((error) => console.log(error)) 
  }
  
// ESTÁS DOS NUEVAS FUNCIONES HARAN UNA NUEVA LLAMA A LA MISMA API
// PERO A DIFERENTES RUTAS 

const onPrevious = () => {
  getCharacters(info.prev)
}

const onNext = () => {
  getCharacters(info.next)
}
  //CON DEPENDECIA VACIA [], LA LLAMADA SE EEJECUTA UNA VEZ RN LO QUE SE CARGA MI COMPONENTE
  // Y SE RENDERIZA. USEEFFECT hace el llamado a la API
  useEffect(() => {
    getCharacters(URI) //CUANDO SE CARGUE EL COMPONENTE, LLAMA AL METODO Y EJECUTA LA FUNCION ANTERIOR.
  }, [] ) 
  
  // TENEMOS NUESTROS COMPONENTES
  return (
    <>
    <Navbar brand="Rick and Morty"/>

    <div className="container">
        {/* pasamos el array a la props */}
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Character character={character} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>

    </>
  );
}

export default App;