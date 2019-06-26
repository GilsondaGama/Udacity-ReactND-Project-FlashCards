import React, { Component } from "react";

import { View, Text } from "react-native";

export default class QuizView extends Component {
  static navigationOptions = {
    headerTitle: "QuizView"
  };
  render() {
    return (
      <View>
        <Text>Dentro do DeckList!</Text>
      </View>
    );
  }
}
