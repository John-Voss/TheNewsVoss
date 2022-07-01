import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import{createSwitchNavigator, createAppContainer} from 'react-navigation';

import db from './config';
import HomeScreen from './screens/HomeScreen';
import Technology from './screens/Technology';
import JokoScreen from './screens/JokoScreen';
import MoneyScreen from './screens/MoneyScreen';
import WeatherScreen from './screens/WeatherScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Technology: Technology,
  JokoScreen: JokoScreen,
  MoneyScreen: MoneyScreen,
  WeatherScreen: WeatherScreen
});

const AppContainer = createAppContainer(AppNavigator);
