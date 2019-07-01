import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { alertMessage } from '../../utils/notifications';
import { Icon } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, FlatList, Animated } from "react-native";

import styled from "styled-components/native";
import { white, black, blue200, blue400, blue600, green700, blue700, red700 } from '../../utils/colors';

import * as DecksActions from "../actions/decks";

class NewDeck extends Component {
  static navigationOptions = {
    headerTitle: "NewDeck"
  };

  state = {
    title: ''
  }

  onSubmit = () => {
    const { title } = this.state;
    if (title.length > 4) {
      this.props.addNewDeck(this.state.title);
      alertMessage('Success!!', 'A new deck was added!!',
        () => Actions.DeckView({ decKey: title }));
    } else {
      alertMessage('Sorry!!', 'The deck title needs at least 5 characters!', () => false);
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>
            What is the title of your new deck?
          </Title>
        </Header>

        <Body>
          <TextInputCustom
            placeholder='New Deck Title'
            underlineColorAndroid='transparent'
            maxLength={15}
            autoCapitalize='words'
            value={this.state.title}
            onChangeText={(title) => this.setState({ title })}
          />

          <Buttons >
            <TouchableOK onPress={this.onSubmit}>
              <Icon
                name="check-circle"
                color={white}
                size={40}
              />
              <TextButton >
                SAVE DECK
              </TextButton>
            </TouchableOK>

            <TouchableNotOK onPress={() => Actions.DeckList()}>
              <Icon
                name="cancel"
                color={white}
                size={40}
              />
              <TextButton >
                CANCEL
              </TextButton>
            </TouchableNotOK>
          </Buttons>
        </Body>
      </Container>
    );
  }
}

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(null, mapDispachToProps)(NewDeck);

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  alignItems: center;
  padding: 10px;
  backgroundColor: ${blue600}
  paddingLeft: 30px;
  paddingRight: 30px;  
`;

const Header = styled.View`
  flex: 1;
  paddingLeft: 20px;
  paddingRight: 20px;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${blue400};
  shadowOpacity: 1;
  elevation: 1;
  borderRadius: 10;
  borderColor: ${blue200};
  borderWidth: 4;
`;

const Title = styled.Text`
  textAlign: center;
  fontSize: 30;
  fontWeight: bold;
  color: ${white};
`;

const Body = styled.View`
  flex: 3;
  marginTop: 20;
`;

const Buttons = styled.View`
  marginTop: 20;
  flexDirection: row;
`;

const TextInputCustom = styled.TextInput`
  height: 50;
  color: ${black};
  borderColor: ${blue700};
  borderWidth: 2;
  borderRadius: 4;
  paddingLeft: 12;
  fontSize: 18;
  backgroundColor: ${white};
`;

const TouchableOK = styled.TouchableOpacity`
  marginTop: 30;
  marginRight: 10;
  marginLeft: 10;
  width: 150px;
  backgroundColor: ${green700};
  paddingTop: 5;
  paddingBottom: 5;
  borderRadius: 50;
  justifyContent: center;
  alignItems: center;
  elevation: 2;
`;

const TouchableNotOK = styled(TouchableOK)`
  backgroundColor: ${red700};
`;

const TextButton = styled.Text`
  textAlign: center;
  fontSize: 15;
  color: ${white};
`;

