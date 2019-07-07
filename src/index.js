import React, { Component } from "react";
import axios from "axios";

import { StyleSheet, Text, View, FlatList } from "react-native";
import { colors } from "./themes";

import MoviesCell from "./components/movieCell";
import Loading from "./components/loading";

class App extends Component {

  state = {
    isLoading: false,
    movies: []
  };

  componentDidMount(){
    this.fetchMovies();
  }
  
  fetchMovies = async () => {
    this.setState({
      isLoading: true
    });
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

          return [data, data, data,data,data,data,data,data,data,data];
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
      this.setState({
        isLoading: false
      });
    if(!response) return;
    this.setState({
      movies: response
      //movies: response; <- verificar esse pois estava dando erro
    })
  };

  onPressHandle = movie => {
  };

  _keyExtractor = (item, index) => item.imdbID + index;


  render() {

    const {movies, isLoading} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Filmes</Text>

        <Text>Open up App.js to start working on your app!</Text>

        <FlatList 
          style={styles.flatList}  
          data={movies}
          renderItem={({item}) => <MoviesCell movie={item} onPress={this.onPressHandle} />}
          keyExtractor={this._keyExtractor}
        />

        {isLoading && <Loading /> }

      
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#848484",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 50,
    fontWeight:"900",
    width: "100%",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    color: colors.primaryTitleText
  },
  subTitle: {
    fontSize: 20,
    fontWeight:"700",
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: colors.primaryTitleText
  },
  flatList: {
    flex: 1,
    fontSize: 30,
    width: "100%",
    backgroundColor: "#01DFA5"
  }
});

export default App;