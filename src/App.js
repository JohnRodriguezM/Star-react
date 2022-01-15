import logo from './assets/logo.svg';
import './css/App.css';

// importar mi primer componente creado
import { First } from "./newComponents/FirstComponent";
let primeraInicializacion = new First() /* no es necesario ni siquiera "instanciar la clase para acceder a las funciones y su uso como tal" */
// pero y para acceder a un metodo o atributo en especifico si.

function nombreCompleto(name,surname) {
  let presentacion = (<div>
  <h2 className = "h2">I'm {name} {surname}</h2>
  <p>and you?</p>
  </div>)
  return presentacion;
}


function App() {
  /* la definicion de las variables, funciones,etc deben estar fuera del return */
  let ocupation = "student"
  return (
    <div className="App">
        {/* //edit// {
          alert("hola mundo desde react")
        }  */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* esta es la declaracion de un h2 */}{nombreCompleto("john","rodriguez")}
        <input type = "text" placeholder= "your name" id = "input"></input>{/* como se maneja eventos */}
        <p>
          ...and my ocupation issss {ocupation} !!! 
        </p>
          {/* uso el componente creado en el otro archivo */}
          <First /> {/* de esta manera estoy haciendo uso de la clase y de en si, de todos los metodos que en ella haya pero si necesitara acceder a alguno en especifico ¿seria necesario instanciar la clase para acceder de manera individual? */}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//localhost:3000


