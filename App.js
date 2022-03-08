import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import params from './src/params';
import Field from './src/components/field';
export default class App extends Component{
  render(){
    return(
      <View>
        
        <Text>Tamanho:{params.getRowsAmount()}X {params.getColumnsAmount()}</Text>
        <Field></Field>
      </View>
    )
  }
}