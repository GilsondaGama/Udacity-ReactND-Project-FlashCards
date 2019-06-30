import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text, FlatList } from "react-native";

import styled from "styled-components/native";
import { white, purple200, purple400, purple600, purple700, purple800 } from '../../utils/colors';

import * as DecksActions from "../actions/decks";

class DeckList extends Component {
  static navigationOptions = {
    headerTitle: "DeckList"
  };

  componentWillMount() {
    this.props.loadDeckList();
  }

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')} >
        <DeskContainer >
          <Avatar>
            <TextDeskAvatar >
              {item.title.charAt(0).toUpperCase()}
            </TextDeskAvatar>
          </Avatar>

          <View>
            <TextDesk >
              {item.title}
            </TextDesk>
            <TextDeskSmall >
              {item.questions.length} Cards
            </TextDeskSmall>
          </View>
        </DeskContainer>
      </ TouchableOpacity >
    );
  };

  render() {
    const { decks } = this.props;

    const data = Object.keys(decks).map(key => {
      return { key, ...decks[key] };
    });

    return (
      <Fragment>
        <ListContainer >
          <FlatList
            data={data}
            renderItem={({ item }) => this.renderItem(item)}
          />

          <TouchableOpacityCustom
            onPress={() =>
              this.props.navigation.navigate("NewDeck", {
                varTeste: "Valor do Deck"
              })
            }>
            <ButtonText>
              ADD DECK
            </ButtonText>
          </TouchableOpacityCustom>
        </ListContainer>
      </Fragment>
    );
  }
}

const ListContainer = styled.View`
  flex: 1;
  flexDirection: column;
  marginTop: 0px;
  paddingLeft: 30px;
  paddingRight: 30px;
  paddingBottom: 15px;
  backgroundColor: ${purple600};
  zIndex: 1;  
`;

const DeskContainer = styled.View`
  flexDirection: row;
  height: 90px;
  marginTop: 15px;
  padding: 10px;
  alignItems: center;
  borderRadius: 50;
  borderWidth: 2;
  borderColor: ${purple200}; 
  shadowOpacity: 1;
  elevation: 6;
  backgroundColor: ${purple400};
`;

const TextDesk = styled.Text`
  fontSize: 25px;
  color: ${white};
  marginTop: 2px;
  marginLeft: 30;
`;

const TextDeskSmall = styled(TextDesk)`
  fontSize: 15px;
`;

const TextDeskAvatar = styled(TextDesk)`
  marginLeft: 0;
`;

const Avatar = styled.View`
  height: 50px;
  width: 50px;
  justifyContent: center;
  alignItems: center;
  borderRadius: 25;
  borderWidth: 0;
  marginLeft: 15;
  backgroundColor: ${purple700};
`;

const TouchableOpacityCustom = styled.TouchableOpacity`
  marginTop: 30;
  backgroundColor: ${purple800};
  paddingTop: 10;
  paddingBottom: 10;
  borderRadius: 35;
  justifyContent: center;
  alignItems: center;
  elevation: 2;
`;

const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: ${white};
`;

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispachToProps
)(DeckList);

