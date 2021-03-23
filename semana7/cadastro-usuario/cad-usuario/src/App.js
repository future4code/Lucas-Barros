import React from "react";
import axios from "axios";
import './App.css';

export default class App extends React.Component {
  state = {
    usuarios: [],
    inputValueNome: "",
    inputValueEmail: "",
  }

  handleInputChangeNome = (e) => {
    this.setState({inputValueNome: e.target.value})
  }

  handleInputChangeEmail = (e) => {
    this.setState({inputValueEmail: e.target.value})
  }



  getAllUser = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    {
      headers: {
        Authorization: "lucas-costa-cruz"
      }
    } 
  
    ).then((res) => {
      this.setState({usuarios: res.data});
      console.log(res.data)
    }).catch((err) =>{
      console.log(err.response.data)
    })
  };

  createUser = () => {
    const body = {
      name: this.state.inputValueNome,
      email: this.state.inputValueEmail
    };
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization : "lucas-costa-cruz"
        }
      }
    ).then((res) => {
      this.setState({inputValueNome: ""})
      this.setState({inputValueEmail: ""})
      this.getAllUser()
    }).catch((err) => {
      console.log(err.response.data);
    });
  };

  render(){
    const listUsers = this.state.usuarios.map((people) => (
      <li>{people.name}</li>
    ));

    return (
      <div className="App">
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
        <button onClick={this.createUser}>Salvar</button>
        <li>{listUsers}</li>
      </div>
    );
  }
  
}


