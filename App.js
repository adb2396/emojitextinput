import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 

import HomeScreen from './components/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen
});

export default createAppContainer(AppNavigator);