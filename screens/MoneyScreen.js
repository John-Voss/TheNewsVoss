import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class MoneyScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        
        <Text style={styles.text}>ECONOMY</Text>
        <View>
          <Text style={styles.text1}>Welcome to The News Voss newspa- per, IBOVESPA shares fall following New  York, with weak economics data in USA.</Text>
          <Text style={styles.text2}>So, the mainest index of Brazil stock Exchange closed the trading session with a drop of 0,17%. Since the begining of the year IBOVESPA has drops of 4,04%</Text>
          <Text style={styles.text3}>This informations was taked from "trademap.com.br"</Text>

          <Image style={styles.moneyImage} source = {require('../assets/money.png')}/>
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
    fontFamily: 'Eras ITC',
    fontSize: 22,
    fontWeight: 'oblique',
    marginBottom: 15,
    textAling: 'center',
    alignSelf: 'center'
  },
  moneyImage:{
    width: 250,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
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