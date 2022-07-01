import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import AppHeader from '../components/AppHeader';
import HomeScreen from './HomeScreen';

export default class JokoScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        
        <Text style={styles.text}>JOKES</Text>
        <View>
          <Text style={styles.text1}>Welcome to The News Voss newspaper, today we´ll see how much a joker earns on average in Brazil.</Text>
          <Text style={styles.text2}>A joker earns on average $11.805,41 in Brazilian job market for about 37 hours a week.</Text>
          <Text style={styles.text3}>This informations was taked from "salario.com.br"</Text>

          <Image style={styles.jokerImage} source = {require('../assets/joker.png')}/>
        </View>

        <TouchableOpacity style={styles.buttonBack} onPress={()=>this.props.navigation.navigate('HomeScreen')}>BACK</TouchableOpacity>
      </View>
    )
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
    marginBottom: 15,
    textAlign:'center'
  },
  text2:{
    fontFamily: 'arial',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 15,
  },
  text3:{
    textAling: 'center',
    fontFamily: 'Eras ITC',
    fontSize: 22,
    fontWeight: 'oblique',
    textAlign:'center',
    marginBottom: 15,
  },
  jokerImage:{
    width: 250,
    height: 210,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
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
    marginBottom: 20
  }

})