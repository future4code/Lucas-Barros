import React from "react";

export default class Etapa3 extends React.Component  {
  
    render(){
      return (
        <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <form>
                    <label>
                        5. Por que você não terminou um curso de graduação <br />
                            <input type="text" name="email" /> <br />
                        6. Você fez algum curso complementar?<br/>
                            <select>
                                    <optgroup>
                                        <option>Nenhum</option>
                                        <option>Curso Tecnico</option>
                                        <option>Curso de Ingles</option>
                                        <option>Outro</option>
                                    </optgroup>
                            </select>
                    </label>
            </form>
        </div>
      );
    }
    
    
  }
  
 
