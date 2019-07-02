import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Icon } from 'react-native-material-ui';
import OverlayButton from '../../utils/OverlayButton';
import { alertMessage } from '../../utils/notifications';
import { white, blue200, blue400 } from '../../utils/colors';
import { TextDesk, TouchableButtonGreen, TouchableButtonBlue, Container } from '../../utils/styleds'

class DeckView extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity, width, height } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
    Animated.spring(width, { toValue: 300, speed: 5 }).start();
    Animated.spring(height, { toValue: 300, speed: 5 }).start();
  }

  render() {
    const { opacity, width, height } = this.state;
    const { decKey, decks } = this.props;

    return (
      <Container>
        <HeaderView >
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 23,
                fontWeight: 'bold',
                color: 'white'
              }}>
              {decks.title}
            </Text>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 2
              }}>
              {decks.questions.length} Cards
            </Text>
          </View>
        </HeaderView>

        <ImageContainer>
          <Animated.Image
            style={{ opacity, width, height, marginTop: -90 }}
            source={require('../../assets/timetoquiz.png')}
          />
        </ImageContainer>



        <OverlayButton
          marginLeft={25}
          onPress={() => Actions.addCard({ decKey })}
        />

        <OverlayButton
          onPress={() => {
            decks.questions.length <= 0
              ? alertMessage('Sorry!!', 'You dont have cards to this deck yet.', () => false)
              : Actions.quizView({ decKey })
          }}
        />

        <TouchableButtonGreen onPress={() => Actions.NewCard({ decKey })}>
          <View style={{ flex: 1 }}>
            <Icon name="add-circle" color={white} size={40} />
          </View>
          <View style={{ flex: 3, justifyContent: 'center' }}>
            <TextDesk > New Card </TextDesk>
          </View>
        </TouchableButtonGreen>

        <TouchableButtonBlue onPress={() => {
          decks.questions.length <= 0
            ? alertMessage('Sorry!!', 'You dont have cards to this deck yet.', () => false)
            : Actions.QuizView({ decKey })
        }}>
          <View style={{ flex: 1 }}>
            <Icon name="play-circle-filled" color={white} size={40} />
          </View>
          <View style={{ flex: 3, justifyContent: 'center' }}>
            <TextDesk > Quiz </TextDesk>
          </View>
        </TouchableButtonBlue>
      </Container >
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  decks: state.decks[ownProps.decKey]
});

export default connect(mapStateToProps)(DeckView);

const ImageContainer = styled.View`
  flex: 4;
  marginTop: 120;
  alignItems: center;
  paddingLeft: 20px;
  paddingRight: 20px;
`;

const HeaderView = styled.View`
  flex: 1;
  paddingLeft: 40px;
  paddingRight: 40px;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${blue400};
  shadowOpacity: 1;
  elevation: 1;
  borderRadius: 10;
  borderColor: ${blue200};
  borderWidth: 4;
`;

const TextButton = styled.Text`
  textAlign: center;
  fontSize: 15;
  color: ${white};
`;
