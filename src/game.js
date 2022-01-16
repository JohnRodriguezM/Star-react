import React, {Component} from 'react';
import './css/juego.css';

// la clase square me crea un boton, simplemente eso
class Square extends Component {
    render() {
        return (
        <button className="square" onClick = {(e)=>{
          alert(`hola soy ${this.props.value}`)
        }}>
           {this.props.value}
        </button>
    );
  }
}
// en la calse board por itero sobre cada bootn con la funcion renderSquare(i), para crear los nueve campos
  class Board extends Component {
    renderSquare(i) {
      return <Square value = {i}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
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
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  
