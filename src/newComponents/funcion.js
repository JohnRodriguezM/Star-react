/* import  Formulario  from "./funcion";

const movies = [
  {
    name: "avengers",
    available: 5
  },
  {
    name: "terminator",
    available: 2
  },
  {
    name: "spiderman",
    available: 55
  }
];
export function Appp() {
  return (
    <div className="App">
      <h1>Peliculas</h1>

      {movies.map((movie) => (
        <Formulario movie={movie} />
      ))}
    </div>
  );
}

export {Formulario};
function Formulario(props) {
    const [cantidad, setCantidad] = React.useState(0);
    const { movie } = props;
    return (
      <form>
        <h3>{movie.name}</h3>
        <button type="button">-</button>
        <button type="button">{cantidad}</button>
        <button type="button" onClick={setCantidad(cantidad + 1)}>
          +
        </button>
      </form>
    );
  } */