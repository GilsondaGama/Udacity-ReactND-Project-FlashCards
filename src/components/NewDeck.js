import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { alertMessage } from '../../utils/notifications';
import { Icon } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';

import styled from "styled-components/native";
import { white, black, blue200, blue400, blue600, blue700, } from '../../utils/colors';
import { TextDesk, TextInputCustom, TouchableButtonGreen, TouchableButtonRed, Container } from '../../utils/styleds'
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

          <TouchableButtonGreen onPress={this.onSubmit}>
            <Icon
              name="check-circle"
              color={white}
              size={40}
            />
            <TextDesk >
              SAVE DECK
            </TextDesk>
          </TouchableButtonGreen>

          <TouchableButtonRed onPress={() => Actions.DeckList()}>
            <Icon
              name="cancel"
              color={white}
              size={40}
            />
            <TextDesk >
              CANCEL
            </TextDesk>
          </TouchableButtonRed>

        </Body>
      </Container>
    );
  }
}

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(null, mapDispachToProps)(NewDeck);

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
