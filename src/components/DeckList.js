import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
  Platform
} from "react-native";

import { purple, white } from "../../utils/colors";
//import NewDeck from "../components/NewDeck";

export default class DeckList extends Component {
  static navigationOptions = {
    headerTitle: "DeckList"
  };

  render() {
    return (
      <View>
        <Text>Dentro do deckList</Text>
        <Button
          title="Add Deck"
          onPress={() =>
            this.props.navigation.navigate("NewDeck", {
              varTeste: "Teste de evio de Dados"
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30
  }
});
