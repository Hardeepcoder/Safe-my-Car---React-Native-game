import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image,Animated,Dimensions
} from 'react-native';
import Stone from './src/stones';
export default class SafeCar extends Component {

constructor(props){
  super(props);
  this.state={
    moveCarVal: new Animated.Value(40), // value for move car
    side: 'left', // by default car on left side
    points: 0, // default points
  };
}
  render() {
    return (
      <Image style={styles.container}
      source={require('./src/img/road1.jpg')}>

      <View style={{flex:1, alignItems: 'center'}}>
      <View style={styles.points}>
      <Text style={{fontSize:30}}>{this.state.points}</Text>
      </View>
      </View>
<Stone/>
      <Animated.Image style={{position:'absolute',
    width:100,height:70,bottom:50,
  transform:[{translateX: this.state.moveCarVal}]}}
        source={require('./src/img/car2.png')}>
      </Animated.Image>

      <View style={styles.controls}>
      <Text style={styles.leftHandle}
      onPress={()=>this.moveCar('left')}>{'<'}</Text>
      <Text style={styles.rightHandle}
      onPress={()=>this.moveCar('right')}>{'>'}</Text>
      </View>

      </Image>
    );
  }

  moveCar(direction){
    if(direction=='right'){
      this.setState({side: 'right'})// will go to right
      Animated.spring(
        this.state.moveCarVal, // new value for move
        {
          toValue: Dimensions.get('window').width-120, // get value from phone with and get value to car
          tension:500 // bouce rate
        }
      ).start();
    }
    else   if(direction=='left'){
        this.setState({side: 'left'})// will go to right
        Animated.spring(
          this.state.moveCarVal, // new value for move
          {
            toValue:30,
            tension:500 // bouce rate
          }
        ).start();
      }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover',
  },
  controls:{
    alignItems:'center',
    flexDirection: 'row',
    width:140, left:120

  },
  leftHandle:{
    flex:1,
    fontSize:50,
    margin:0,
    textAlign:'left',
    fontWeight: 'bold',
    color:'#fff'

  },
  rightHandle:{
    flex:1,
    fontSize:50,
    margin:0,
    textAlign:'right',
    fontWeight: 'bold',
    color:'#fff'
  },
  points:{
    width:100,
    height:40,
    justifyContent: 'center'
  }

});

AppRegistry.registerComponent('SafeCar', () => SafeCar);
