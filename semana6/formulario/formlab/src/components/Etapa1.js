import React from "react";

export default class Etapa1 extends React.Component  {
  
    render(){
      return (
        <div>
            <h1>Etapa 1 - DADOS GERAIS</h1>
                <form>
                    <label>
                        1. Qual o seu nome?: <br />
                        <input type="text" name="name" /> <br/>
                        2. Qual sua idade?: <br />
                        <input type="text" name="idade" /> <br />
                        3. Qual seu email?: <br />
                        <input type="text" name="email" /> <br />
                        4. Qual a sua escolaridade?: <br/>
                        <select>
                                <optgroup>
                                    <option>Ensino Medio Incompleto</option>
                                    <option>Ensino Medio Completo</option>
                                    <option>Ensino Superior Incompleto</option>
                                    <option>Ensino Superior Completo</option>
                                </optgroup>
                        </select>
           
                    </label>    
                </form>
        </div>
      );
    }
    
  }
  
  

