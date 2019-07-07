import { StyleSheet} from "react-native";
import { colors } from "../../themes";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 10,
    paddingLeft: 10,

  },
  scrollView:{
    flex: 1,
    width: "100%"
  },
  value: {
    textAlign: "left",
    paddingTop: 8,
    paddingBottom: 1,
    fontWeight: '700',
    fontSize: 25,
    fontWeight:"700",
    width: "100%",
    color: colors.black
  },
  label: {
    textAlign: "left",
    paddingTop: 8,
    paddingBottom: 1,
    fontWeight: '700',
    fontSize: 25,
    fontWeight:"700",
    width: "100%",
    color: colors.gray

  }
});

export default styles;