import { createAppContainer, createStackNavigator } from "react-navigation";
import Movie from "./containers/movie";
import App from "./containers/app";

const AppStack = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Movie: {
    screen: Movie,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
},
{
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
    gesturesEnabled: false
  }
}
);

const RootRouter = createAppContainer(AppStack);

export default RootRouter;