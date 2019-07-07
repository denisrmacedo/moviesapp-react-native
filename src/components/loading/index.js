import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../../themes";
import styles from "./styles";

const Loading = ({
  color = colors.black,
  ...props
}) => (
  <View style={styles.loading } {...props} >

    <ActivityIndicator 
      size="large"
      color={color}
    />


  </View>

);

export default Loading;



