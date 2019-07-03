import React, { Component } from 'react';
import { View, Text, Switch, Animated } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-material-ui';
import { setLocalNotification, clearLocalNotification } from '../../utils/notifications';
import { white, blue200, blue400 } from '../../utils/colors';
import { TextDesk, TouchableButtonGreen, TouchableButtonBlue, TouchableButtonRed, Container } from '../../utils/styleds'

class QuizView extends Component {
  state = {
    opacity: new Animated.Value(1),
    switchValue: false,
    rightAnswers: 0,
    wrongAnswers: 0,
    cardPosition: 0
  }

  static navigationOptions = ({ navigation }) => {
    const { decKey } = navigation.state.params;
    return {
      title: `Quiz for ${decKey}`
    };
  }

  toggleAnimate = () => {
    const { opacity } = this.state;

    Animated.timing(opacity, { toValue: 0, duration: 1000 }).start();
  }

  toggleSwitch = (value) => {
    this.setState({
      switchValue: value
    });
  }

  restartQuiz = () => {
    this.setState({
      switchValue: false,
      rightAnswers: 0,
      wrongAnswers: 0,
      cardPosition: 0
    });
  }

  render() {
    const { opacity, switchValue, cardPosition, rightAnswers, wrongAnswers } = this.state;
    const { decks } = this.props;

    const totalQuestions = decks.questions.length;
    const currentQuestion = decks.questions[cardPosition];

    if (cardPosition >= totalQuestions) {

      clearLocalNotification().then(setLocalNotification);
      return (
        <Container>
          <QuestionContainer>
            <Counter>
              <Text style={{ fontSize: 18, color: white }}>Results</Text>
            </Counter>
            <Question as={Animated.View} style={[{ opacity }]}>
              <Text style={{ fontSize: 23, textAlign: 'center', color: white }}>
                {rightAnswers} / {totalQuestions} corrects {((rightAnswers / totalQuestions) * 100).toFixed(1)}%
              </Text>
            </Question>
          </QuestionContainer>

          <ButtonsContainer>
            <View style={{ marginTop: 20 }}>
              <TouchableButtonBlue onPress={() => this.restartQuiz()}>
                <View style={{ flex: 1 }}>
                  <Icon name="swap-vertical-circle" color={white} size={40} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                  <TextDesk > Restart Quiz </TextDesk>
                </View>
              </TouchableButtonBlue>
            </View>

            <View style={{ marginTop: 15 }}>
              <TouchableButtonRed onPress={() => Actions.pop()}>
                <View style={{ flex: 1 }}>
                  <Icon name="arrow-drop-down-circle" color={white} size={40} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                  <TextDesk > Back To Deck </TextDesk>
                </View>
              </TouchableButtonRed>
            </View>
          </ButtonsContainer>
        </Container>
      );
    }

    return (
      <Container>
        <QuestionContainer>
          <Counter>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: white }}>{cardPosition} / {totalQuestions}</Text>
          </Counter>
          <Question as={Animated.View} style={[{ opacity }]}>
            {!switchValue
              ? <Text
                style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: white }}
              >
                {currentQuestion.question}
              </Text>
              : <Text
                style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: white }}
              >
                {currentQuestion.answer}
              </Text>
            }
          </Question>
        </QuestionContainer>

        <SwitchContainer>
          <Text style={{ fontSize: 18, color: white, textAlign: 'center', marginRight: 15 }}>
            Show answer:
         </Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={switchValue}
          />
        </SwitchContainer>

        {switchValue
          ?
          <ButtonsContainer>
            <View style={{ marginTop: 0 }}>
              <TouchableButtonGreen
                onPress={() => {
                  this.setState({
                    cardPosition: cardPosition + 1,
                    rightAnswers: rightAnswers + 1,
                    switchValue: false
                  });
                }}>
                <View style={{ flex: 1 }}>
                  <Icon name="check-circle" color={white} size={40} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                  <TextDesk > Correct </TextDesk>
                </View>
              </TouchableButtonGreen>
            </View>

            <View style={{ marginTop: 15 }}>
              <TouchableButtonRed
                onPress={() => {
                  this.setState({
                    cardPosition: cardPosition + 1,
                    wrongAnswers: wrongAnswers + 1,
                    switchValue: false
                  })
                }}>
                <View style={{ flex: 1 }}>
                  <Icon name="cancel" color={white} size={40} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                  <TextDesk > Incorrect </TextDesk>
                </View>
              </TouchableButtonRed>
            </View>

          </ButtonsContainer>
          :
          <View>
          </View>
        }
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  decks: state.decks[ownProps.decKey]
});

export default connect(mapStateToProps)(QuizView);


const QuestionContainer = styled.View`
  backgroundColor: ${blue400};
  padding: 7px;
  borderWidth: 1;
  borderColor: ${blue200};
  elevation: 1;
  opacity: 0.9;
  borderRadius: 4;
  height: 300;
`;

const Counter = styled.View`
  height: 30;
  justifyContent: center;
`;

const Question = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const SwitchContainer = styled.View`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`;

const ButtonsContainer = styled.View`
  flex: 3;
`;
