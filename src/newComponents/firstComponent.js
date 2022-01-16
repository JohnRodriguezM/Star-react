import React, {Component} from 'react';
import '../css/FirstComponent.css';
/* es basicamente herencia de POO, se hereda las propiedades y metodos de una clase y los puedo usar dentro de otra, en este ej: los puedo usar dentro de mi componente */

export class First extends Component{
    
    sumatoria(num1,num2){
        return num1 + num2;
    }
    /* llamo el metodo render, con este que se retorna el jsx en la pantalla del navegador */
    render(){
        let persona = {
            nombre : "john",
            hobbies : [
                "a","b","c"
            ],
            apellido : "rodriguez",
        }
        /* el return devuelve una etiqueta, asi que si necesito varias debo usar una etiqueta englobadora:
        -div
        -section
        para devolver varias por si solas puedo usar
        <React.Fragment></react.Fragment>
        */
        return (
            <div className = "micom">
            <p>Soy el primer componente y la suma de 1 + 1 es {this.sumatoria(8,1)}, facilmente se accede a un objeto, asi pues mi nombre es {persona.nombre} {persona.apellido}, mis hobbies son:</p>
            <ol>
                {persona.hobbies.map(item =>{
                    if(item === 'z'){
                        return(
                        <li className = "liItem">{item}</li>
                        )
                    }else{
                        return(
                            <li className = "liItem">{item}</li>
                        )
                    }
                })}
            </ol>
            </div>
        );
    }
}


