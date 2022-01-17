import {React} from 'react';
import {Component} from 'react';
import './css/juego.css';

// la clase square me crea un boton, simplemente eso
          // en la calse board por itero sobre cada bootn con la funcion renderSquare(i), para crear los nueve campos
/*           class Square extends Component {
            /* constructor(props)
            {
             super(props);
               this.state =
                 {
                   value: undefined,
                 }
            } */
            /* --- ESTABA ASIGNANDOLE Y A LA VEZ TRAYENDO EL VALOR DEL ESTADO ACTUAL DEL BUTTON 
           render() {
             return (
               <button
                 className="square"
                 onClick = {(e)=>{
                   console.log(`hola soy ${this.props.value}`)
                   this.props.onClick()
                 }}>
                       {this.props.value}
               </button>
           );
         }
       } */
function Square(props) {
  return(
    <button
      className = "square"
      onClick = {props.onClick}>
        {props.value}
    </button>
  );
}




class Board extends Component {

    constructor(props){
      super(props);
      this.state = {
        squares : Array(9).fill(null),
        xIsNext: true,
      }
    }

    handleClick(i){
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState
        (
          {
            squares: squares,
            xIsNext : !this.state.xIsNext,
          }
        )
    }

    renderSquare(i) {
        return (
        <Square
          value = {this.state.squares[i]}
          onClick ={()=> this.handleClick(i)}
        />
        );
      }

    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = `Winner ${winner}`
      }else{
        status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
      }

                return (
                  <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
              </div>
            </div>
          );
        }
      }
       

export class Game extends Component {
    render() {
      return (
        <div
        className="game">
          <div
          className="game-board">
            <Board />
          </div>
          <div
          className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
