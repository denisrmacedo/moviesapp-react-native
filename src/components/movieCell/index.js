import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class MoviesCell extends Component {

  static propTypes = { 
    movie: PropTypes.object.isRequired,
    onPress: PropTypes.func
  };

  onPressHandle = event => {
    const { movie, onPress} = this.props;
    onPress && onPress(movie);
  }

  render(){

    const { movie} = this.props;

    
    return (

      <TouchableOpacity onPress={this.onPressHandle}>
    
        <View style={styles.container}>
        
            <Text style={styles.title}>{movie.Title}</Text>

            <Text style={styles.subTitle}>{movie.Genre}</Text>

        </View>

      </TouchableOpacity>

    );
  }

}