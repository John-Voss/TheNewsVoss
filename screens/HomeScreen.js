import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import AppHeader from '../components/AppHeader';
import JokoScreen from './JokoScreen';
import MoneyScreen from './MoneyScreen';
import Technology from './Technology';
import WeatherScreen from './WeatherScreen';

import db from '../config';

export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      like: 0,
      dislike: 0
    }
  }

  likeCount=()=>{
    this.setState({
      like: this.state.like+1
    });
    var dbRef = db.ref('counts');
    dbRef.update({
      like: this.state.like+1
    })
  }
  dislikeCount=()=>{
    this.setState({
      dislike: this.state.dislike+1
    });
    var dbRef = db.ref('counts');
    dbRef.update({
      dislike: this.state.dislike+1
    })
  }
  changeScreen=(screen)=>{
    this.props.navigation.navigate(screen);
  }

  render(){
    return(
      <View>
        <AppHeader/>

        <Text style={styles.text}>Today´s news:</Text>
        <TouchableOpacity style={styles.joke} onPress={()=>this.changeScreen('JokoScreen')}>
          <Text>Jokes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.money} onPress={()=>this.changeScreen('MoneyScreen')}>
          <Text>Economy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tech} onPress={()=>this.changeScreen('Technology')}>
          <Text>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.weather} onPress={()=>this.changeScreen('WeatherScreen')}>
          <Text>Weather</Text>
        </TouchableOpacity>
        
        <View style={styles.container2}>
          <Text style={styles.likeOrDislike}>DID YOU LIKE THE NEWS?</Text>
          <TouchableOpacity onPress={()=>this.likeCount()}>
            <Image style={styles.image1} source = {require('../assets/thumbs-up-hand-symbol.png')}/>
            <Text style={{marginLeft: 60, fontWeight: 'bold'}}>LIKE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.dislikeCount()}>
            <Image style={styles.image2} source = {require('../assets/thumbs-down-silhouette.png')}/>
            <Text style={{marginLeft: 235, fontWeight: 'bold'}}>DISLIKE</Text>
          </TouchableOpacity>

          <Text style={styles.count1}>{this.state.like}</Text>
          <Text style={styles.count2}>{this.state.dislike}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontFamily: 'Copperplate Gothic',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10
  },
  joke:{
    alignSelf: 'center',
    alignItems: 'center',
    border: 'solid',
    borderRadius: 10,
    borderEndColor: 'blue',
    borderBottomColor: 'green',
    borderStartColor: 'black',
    borderTopColor: 'orange',
    padding: 10,
    paddingLeft: 60,
    paddingRight: 60,
    margin: 20
  },
  money:{
    alignSelf: 'center',
    alignItems: 'center',
    border: 'solid',
    borderRadius: 10,
    borderEndColor: 'pink',
    borderBottomColor: 'purple',
    borderStartColor: 'yellow',
    borderTopColor: 'red',
    padding: 10,
    paddingLeft: 48,
    paddingRight: 48,
    margin: 20
  },
  tech:{
    alignSelf: 'center',
    alignItems: 'center',
    border: 'solid',
    borderRadius: 10,
    borderEndColor: 'aquamarine',
    borderBottomColor: 'gold',
    borderStartColor: '#FF00FF',
    borderTopColor: '#D8BFD8',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 20
  },
  weather:{
    alignSelf: 'center',
    alignItems: 'center',
    border: 'solid',
    borderRadius: 10,
    borderEndColor: '#556B2F',
    borderBottomColor: '#FF1493',
    borderStartColor: 'maroon',
    borderTopColor: '#FF4500',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 20
  },
  container2:{
    marginTop: 20
  },
  image1:{
    width: 50,
    height: 50,
    marginLeft: 50,
    marginBottom: 2
  },
  image2:{
    width: 50,
    height: 50,
    marginLeft: 235,
    marginTop: -65,
  },
  likeOrDislike:{
    alignSelf: 'center',
    fontFamily: 'Copperplate Gothic',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  count1:{
    marginLeft: 70,
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold'
  },
  count2:{
    marginLeft: 255,
    fontSize: 15,
    marginTop: -20,
    fontWeight: 'bold'
  }
  
})