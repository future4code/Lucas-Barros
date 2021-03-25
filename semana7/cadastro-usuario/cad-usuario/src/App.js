import React from "react";
import axios from "axios";
import './App.css';
import TelaRegistro from "./components/TelaRegistro"
import Menu from  "./components/Menu"


export default class App extends React.Component {
  
  state = {
    usuarios: [],
    page: "cadastrar"
  }

  changePage = () => {

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

  createUser = (nome, email) => {
    const body = {
      name: nome,
      email: email
    };
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization : "lucas-costa-cruz"
        }
      }
    ).then((res) => {
      
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
        <Menu />
        <TelaRegistro createUser ={this.createUser} />
       <ul> {listUsers} </ul>
      </div>
    );
  }
  
}


