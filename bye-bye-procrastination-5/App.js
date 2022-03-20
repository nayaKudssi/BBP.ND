import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


import { AppTabNavigator } from './Navigation/BottomTabNavigation'


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  AppTabNavigator:{screen: AppTabNavigator},

})

const AppContainer =  createAppContainer(switchNavigator);
