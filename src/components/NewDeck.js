import React, { Component } from "react";

import { View, Text, Button } from "react-native";

export default class NewDeck extends Component {
  static navigationOptions = {
    headerTitle: "NewDeck"
  };

  render() {
    return (
      <View>
        <Text>Dentro do DeckList!</Text>
        <Text>Envio: {this.props.navigation.getParam("varTeste")}</Text>
        <Button
          title="Salvar e Voltar"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
