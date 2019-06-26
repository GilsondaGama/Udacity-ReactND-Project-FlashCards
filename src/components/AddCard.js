import React, { Component } from "react";

import { View, Text } from "react-native";

export default class AddCard extends Component {
  static navigationOptions = {
    headerTitle: "AddCard"
  };
  render() {
    return (
      <View>
        <Text>Dentro do DeckList!</Text>
      </View>
    );
  }
}
