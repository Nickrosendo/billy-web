import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native-web';
import { homeIcon } from '../../images';

export default class Login extends Component {

  render() {
    return (
      <View>
        <Button
          onPress={() => console.log('Foi Login')}
          title="Go to Home"
        />
        <Image
          source={homeIcon}
          style={styles.icon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})