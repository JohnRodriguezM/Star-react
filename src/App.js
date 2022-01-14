import logo from './assets/logo.svg';
import './css/App.css';

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
          ...and my ocupation is {ocupation} !!!
        </p>
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


