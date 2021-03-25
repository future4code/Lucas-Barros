import React from "react";
import axios from "axios";

export default class TelaRegistro extends React.Component {

    state = {
        
        inputValueNome: "",
        inputValueEmail: "",
      }
    
      handleInputChangeNome = (e) => {
        this.setState({inputValueNome: e.target.value})
      }
    
      handleInputChangeEmail = (e) => {
        this.setState({inputValueEmail: e.target.value})
      }
    
    

    render(){

        return(
            <div>
                 <input
                    placeholder={"nome:"}
                    value={this.state.inputValueNome}
                    onChange={this.handleInputChangeNome}
                    />
                    <input
                    placeholder={"e-mail:"}
                    value={this.state.inputValueEmail}
                    onChange={this.handleInputChangeEmail}
                    />
                    <button onClick={()=>this.props.createUser(this.state.inputValueNome, this.state.inputValueEmail)}>Salvar</button>
            </div>
            )
    }
       
}