import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

export default class B extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>COMPONENT B</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'blue'
    }
  });
  