import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-material-ui';
import { View } from 'react-native';

import { alertMessage } from '../../utils/notifications';
import * as DecksActions from "../actions/decks";
import styled from "styled-components/native";
import { TextDesk, TouchableButtonGreen, TouchableButtonRed, TextInputCustom, Container } from '../../utils/styleds'
import { white, black, blue400 } from '../../utils/colors';


class NewCard extends Component {
  static navigationOptions = ({ navigation }) => {
    const { decKey } = navigation.state.params;
    return {
      title: `Add card to ${decKey}`
    };
  }

  state = {
    question: '',
    answer: ''
  }

  onSubmit = (decKey) => {
    const { question, answer } = this.state;
    if (question.length >= 5 && answer.length >= 5) {
      this.props.addCardToDeck(decKey, this.state);
      alertMessage('Success!!', `A new card was added to ${decKey}.`, () => Actions.pop());
    } else {
      alertMessage('Sorry!!', 'The question and answer needs at least 5 characters!', () => false);
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>
            {this.props.decKey}
          </Title>
        </Header>

        <Body>
          <TextInputCustom
            placeholder='Enter your question...'
            underlineColorAndroid='transparent'
            maxLength={50}
            autoCapitalize='words'
            value={this.state.question}
            onChangeText={(question) => this.setState({ question })}
          />

          <TextInputCustom
            placeholder='Enter your answer...'
            underlineColorAndroid='transparent'
            maxLength={50}
            autoCapitalize='words'
            value={this.state.answer}
            onChangeText={(answer) => this.setState({ answer })}
          />

          <TouchableButtonGreen onPress={() => this.onSubmit(this.props.decKey)}>
            <View style={{ flex: 1 }}>
              <Icon name="check-circle" color={white} size={40} />
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}>
              <TextDesk > Save Card </TextDesk>
            </View>
          </TouchableButtonGreen>

          <TouchableButtonRed onPress={() => Actions.pop()}>
            <View style={{ flex: 1 }}>
              <Icon name="cancel" color={white} size={40} />
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}>
              <TextDesk > Cancel </TextDesk>
            </View>
          </TouchableButtonRed>

        </Body >
      </Container >
    );
  }
}

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(null, mapDispachToProps)(NewCard);

const Header = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${blue400}
  borderRadius: 4;
  shadowRadius: 3;
  shadowOpacity: 1;
  elevation: 1;
`;

const Title = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: ${white};
`;

const Body = styled.View`
  flex: 3;
  marginTop: 20;
`;

const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: ${black};
`;
