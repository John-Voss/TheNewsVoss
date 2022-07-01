import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class Technology extends React.Component{
    constructor(){
    super();
    this.state = {
      weather: ''
    }
  }

  getWeather= async ()=>{
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=-25.4672232&lon=-49.2808718';
    return fetch(url)
      .then(response=> response.json())
      .then(responseJson=>{
        this.setState({
          weather: responseJson
        })
        console.log(this.state.weather);
      })
      .catch(error=>{
        console.error(error);
      })
  }

  componentDidMount(){
    this.getWeather();
  }

  render(){
    if(this.state.weather === ''){
      return(
        <View style={styles.container}>
          <Text>Carregando...</Text>
        </View>
      )
    }
    else{
      return(
        <View>
          <AppHeader/>
          
          <Text style={styles.text}>WEATHER</Text>

          <View>
            <Text style={styles.text1}>Welcome to The News Voss newspaper, here is the weather in your city.</Text>
            <Image style={styles.clouldImage} source = {require('../assets/clould.png')}/>
            <Text style={styles.text2}>Temp: {this.state.weather.main.temp}&deg;   ||   {this.state.weather.weather[0].description}</Text>
          </View>

          <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.navigate('HomeScreen')}>BACK</TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  text:{
    fontFamily: 'Copperplate Gothic',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10
  },
  text1:{
    fontFamily: 'Eras ITC',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center'
  },
  text2:{
    fontFamily: 'arial',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  clouldImage:{
    width: 250,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonBack:{
    width: 90,
    backgroundColor: 'red',
    color: 'darkblue',
    fontFamily: 'arial',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    border: 'solid',
    borderColor: 'darkblue',
    borderRadius: 500,
  }

})