import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Loading from "../../components/loading";
import styles from "./styles";

class Movie extends Component {

  constructor(props) {
    super(props);
    const movie = this.props.navigation.state.params.movie;
    this.state = {
      isLoading: false,
      movie
    };

  }

  onPressBack = () => {
    this.props.navigation.goBack();
  }

  render() {

    const {isLoading, movie} = this.state;

    return (
      <View style={styles.container}>

        <ScrollView style={styles.scrollView}>
            
          <Text style={styles.label}>Título</Text>

          <Text style={styles.value}>{movie.Title}</Text>

          <Text style={styles.label}>Year</Text>

          <Text style={styles.value}>{movie.Year}</Text>

          <Text style={styles.label}>Avaliação</Text>

          <Text style={styles.value}>{movie.Rated}</Text>

          <Text style={styles.label}>Liberação</Text>

          <Text style={styles.value}>{movie.Released}</Text>

          <Text style={styles.label}>Duração</Text>

          <Text style={styles.value}>{movie.Runtime}</Text>

          <Text style={styles.label}>Gênero</Text>

          <Text style={styles.value}>{movie.Genre}</Text>

          <Text style={styles.label}>Diretor</Text>

          <Text style={styles.value}>{movie.Director}</Text>

          <Text style={styles.label}>Escritor</Text>

          <Text style={styles.value}>{movie.Writer}</Text>

          <Text style={styles.label}>Atores</Text>

          <Text style={styles.value}>{movie.Actors}</Text>

          <Text style={styles.label}>Enredo</Text>

          <Text style={styles.value}>{movie.Plot}</Text>

          <Text style={styles.label}>Idioma</Text>

          <Text style={styles.value}>{movie.Language}</Text>

          <Text style={styles.label}>País</Text>

          <Text style={styles.value}>{movie.Country}</Text>

          <Text style={styles.label}>Prêmios</Text>

          <Text style={styles.value}>{movie.Awards}</Text>

          <Text style={styles.label}>Poster</Text>

          <Text style={styles.value}>{movie.Poster}</Text>

          <Text style={styles.label}>Metascore</Text>

          <Text style={styles.value}>{movie.Metascore}</Text>

          <Text style={styles.label}>imdbRating</Text>

          <Text style={styles.value}>{movie.imdbRating}</Text>

          <Text style={styles.label}>imdbVotes</Text>

          <Text style={styles.value}>{movie.imdbVotes}</Text>

          <Text style={styles.label}>imdbVotes</Text>

          <Text style={styles.value}>{movie.imdbVotes}</Text>

          <Text style={styles.label}>imdbID/</Text>

          <Text style={styles.value}>{movie.imdbID}</Text>

          <Text style={styles.label}>Type</Text>

          <Text style={styles.value}>{movie.Type}</Text>

          <Text style={styles.label}>DVD</Text>

          <Text style={styles.value}>{movie.DVD}</Text>

          <Text style={styles.label}>BoxOffice</Text>

          <Text style={styles.value}>{movie.BoxOffice}</Text>

          <Text style={styles.label}>Production</Text>

          <Text style={styles.value}>{movie.Production}</Text>

          <Text style={styles.label}>Website</Text>

          <Text style={styles.value}>{movie.Website}</Text>

          <Text style={styles.label}>Response</Text>

          <Text style={styles.value}>{movie.Response}</Text>

        </ScrollView>
        
        {isLoading && <Loading /> }

      </View>

    );
  }

}

export default Movie;