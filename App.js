import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import params from './src/params';

export default class App extends Component{
  render(){
    return(
      <View>
        <Text>Tamanho:{params.getRowsAmount()}X {params.getColumnsAmount()}</Text>
      </View>
    )
  }
}