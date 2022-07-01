import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class Technology extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        
        <Text style={styles.text}>TECHNOLOGY</Text>
        <View>
          <Text style={styles.text1}>Welcome to The News Voss newspa- per, Metaverse is a internet world that is the future.</Text>
          <Text style={styles.text2}>The art market is in. They sell the arts as NFT, the auction house Sotheby´s discover the profit potential. They created a platform called Sotheby´s Metaverse, where they organize an auction for the sale of visual works.</Text>
          <Text style={styles.text3}>This informations was taked from "revistalofficiel.com.br"</Text>

          <Image style={styles.techImage} source = {require('../assets/technology.png')}/>
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
    textAlign: 'center'
  },
  text2:{
    fontFamily: 'arial',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  text3:{
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Eras ITC',
    fontSize: 22,
    fontWeight: 'oblique',
    marginBottom: 15,
    textAlign: 'center'
  },
  techImage:{
    width: 250,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    border: 'solid',
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