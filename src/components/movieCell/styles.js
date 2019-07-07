import { StyleSheet} from "react-native";
import { colors } from "../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    flex: 1,
    textAlign: "left",
    paddingTop: 8,
    paddingBottom: 1,
    fontWeight: '700',
    fontSize: 25,
    fontWeight:"700",
    width: "100%",
    color: colors.black
  },
  subTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: "left",
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: '100',
    fontWeight:"700",
    width: "100%",
    color: colors.gray
  }
});

export default styles;