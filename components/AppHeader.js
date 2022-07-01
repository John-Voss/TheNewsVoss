import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>The News Voss</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'red',
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Old English Text MT ',
    textAlign: 'center',
  }
});