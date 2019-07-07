import React, { Component } from "react";
import axios from "axios";

import { StyleSheet, Text, View } from "react-native";
import { colors } from "./themes";

class App extends Component {

  state = {
    movies: []
  };

  componentDidMount(){
    this.fetchMovies();
  }
  
  fetchMovies = async () => {
    let response = await axios({
      url: "http://www.omdbapi.com/?i=tt3896198&apikey=f0e268f0",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        try {
          let data = res.data;
          console.log("o valor que retornoou da api");
          console.dir(data);

          //TODO Modificar essa parte quando eu pesquisar a api, remover o []
          //apos

          return [data];
        } catch (err) {
          console.log("deu ruim a porra do tratamento de retorno!");
          console.error(err);
          return null;
        }
      })
      .catch(err => {
        console.log("deu ruim a porra da requisição!");
        console.error(err);
        return null;
      });

    if(!response) return;
    this.setState({
      movies: response
      //movies: response; <- verificar esse pois estava dando erro
    })
  };

  render() {

    const {movies} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Filmes</Text>

        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}