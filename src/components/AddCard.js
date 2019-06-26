import React, { Component } from "react";

import { View, Text, Button } from "react-native";

export default class AddCard extends Component {
  static navigationOptions = {
    headerTitle: "AddCard"
  };
  render() {
    return (
      <View>
        <Text>Dentro do AddCard!</Text>

        <Button
          title="Salvar e Voltar"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
