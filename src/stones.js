import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image,Animated,Dimensions
} from 'react-native';
export default class stones extends Component {

  render() {
    return (
      <Animated.Image source={require('./img/stone1.png')}
      style={{position:'absolute',
      width:70,
      height:50,
      left:10, // from index file
      resizeMode: 'stretch',
      transform:[
      { translateY: 12,} // value from index
      ]
    }}  >
      </Animated.Image>
    );
  }

}
