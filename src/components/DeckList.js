import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions
} from "react-native";
import stackNavigator from 'react-navigation'

import { black, gray, lightpurple, purple, white } from '../../utils/colors';
import styled from "styled-components";
import Constants from 'expo-constants';

import * as DecksActions from "../actions/decks";
//import NewDeck from "../components/NewDeck";

function Desk({ decKey, title, numberOfCards }) {
  return (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDeck')} >
      <DeskContainer
        style={{ backgroundColor: `${lightpurple}` }}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 23,
              fontWeight: 'bold',
              color: `${white}`
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: `${white}`,
              marginTop: 2
            }}
          >
            {numberOfCards} Cards
          </Text>
        </View>
      </DeskContainer>
    </ TouchableOpacity >
  );
}

class DeckList extends Component {
  static navigationOptions = {
    headerTitle: "DeckList"
  };

  componentWillMount() {
    this.props.loadDeckList();
  }

  renderItem = ({ item }) => {
    return (
      <Desk
        key={item.key}
        decKey={item.key}
        title={item.title}
        numberOfCards={item.questions.length}
      />
    );
  };

  render() {
    const { decks } = this.props;

    const data = Object.keys(decks).map(key => {
      return { key, ...decks[key] };
    });

    return (
      <ListContainer>
        <FlatList
          data={data}
          renderItem={this.renderItem}
        />

        <AddButtonOverlay>
          <TouchableOpacity onPress={() => { }}>
            <Text>Add Deck</Text>
          </TouchableOpacity>
        </AddButtonOverlay>
      </ListContainer>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispachToProps
)(DeckList);

const { height, width } = Dimensions.get('window');

const ListContainer = styled.View`
        flex: 1;
        flexDirection: column;
        marginTop: 0px;
        paddingLeft: 35px;
        paddingRight: 35px;
        paddingBottom: 15px;
  backgroundColor: ${purple};
      zIndex: 1;
    `;

const DeskContainer = styled.View`
      flexDirection: row;
      height: 90px;
      marginTop: 15px;
      padding: 10px;
      justifyContent: center;
      alignItems: center;
      borderRadius: 50;
      shadowOpacity: 1;
      elevation: 4;
    `;

const ImageStyled = styled.Image`
      width: 55;
      height: 55;
    `;

const AddButtonOverlay = styled.View`
      flexDirection: column;
      position: absolute;
  marginTop: ${height - (7 * Constants.statusBarHeight)};
  marginLeft: ${width - 80};
      opacity: 0.6;
    `;
