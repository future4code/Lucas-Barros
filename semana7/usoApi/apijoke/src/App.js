import React from "react";
import styled from 'styled-components'
import axios from "axios";

const Body = styled.body `
  background-color: #686de0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 20px;
  `;


const Container = styled.div `
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.1), 0 6px 6px rgba(0,0,0,0.1);
  padding: 50px 20px;
  max-width: 100%;
  width: 800px;
`
  


const Title = styled.h3 `
  display: flex;
  justify-content: center;
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
`;

const Joke = styled.p `
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
  `;

  const Btn = styled.button `
  margin: 0 auto;
  background-color: #9F68E0;
  border:0;
  border-radius:10px;
  box-shadow: 0 10px 20px rgba(0,0,0, 0.1), 0 6px 6px rgba(0,0,0,0.1);
  padding: 14px 40px;
  cursor: pointer;  
  `;



export default class App extends React.Component {
  state = {
    joke: {}
  };

  getJoke = () => {
    axios
      .get(" https://icanhazdadjoke.com/",
      {
        headers: {
          Accept: "application/json"
        }
      }) .then((res) => {
        console.log(res.data);
        this.setState({ joke: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
  
    return (
      <Body>
        <Container>
          <Title>Desafio Tente Não Rir </Title>
        <Joke> {this.state.joke.joke} </Joke>
        <Btn onClick={this.getJoke}>Nova Piada</Btn>
        </Container>
      </Body>
    );
  }
}

