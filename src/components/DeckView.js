import React, { Component } from "react";

import { View, Text, Button } from "react-native";

export default class DeckView extends Component {
  static navigationOptions = {
    headerTitle: "DeckView"
  };
  render() {
    return (
      <View>
        <Text>Dentro do DeckView!</Text>

        <Button
          title="Add Card"
          onPress={() =>
            this.props.navigation.navigate("AddCard", {
              varTeste: "Teste de evio de Dados"
            })
          }
        />

        <Button
          title="Start Quiz"
          onPress={() =>
            this.props.navigation.navigate("QuizView", {
              varTeste: "Teste de evio de Dados"
            })
          }
        />
      </View>
    );
  }
}
