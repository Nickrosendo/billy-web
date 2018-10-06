import React, { Component } from "react";
import { StyleSheet, Image, Button } from 'react-native-web';
import { homeIcon } from '../images';

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={homeIcon}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate("Login")}
        title="Go to Login"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})