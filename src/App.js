import { createDrawerNavigator } from 'react-navigation';
import Home from './containers/Home';
import Login from './containers/Login';

const routerConfig = {
  Home: { screen: Home },
  Login: { screen: Login }
}

const drawerConfig = {
  drawerPosition: 'left'
}

const App = createDrawerNavigator(routerConfig, drawerConfig)

export default App;
