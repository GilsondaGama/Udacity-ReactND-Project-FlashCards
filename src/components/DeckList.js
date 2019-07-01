import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';

import { View, TouchableOpacity, FlatList, Animated } from "react-native";
import { Icon } from 'react-native-material-ui';
import * as DecksActions from "../actions/decks";
import { white } from '../../utils/colors';
import {
  TextDesk, TextDeskAvatar, TextDeskSmall, TextButton, Container, DeskContainer, TouchableButtonGreen, Avatar
} from '../../utils/styleds'

function Desk({ decKey, title, numberOfCards }) {
  return (
    <TouchableOpacity onPress={() => Actions.DeckView({ decKey })}>
      <DeskContainer as={Animated.View} >
        <Avatar>
          <TextDeskAvatar >
            {title.charAt(0).toUpperCase()}
          </TextDeskAvatar>
        </Avatar>

        <View>
          <TextDesk >
            {title}
          </TextDesk>
          <TextDeskSmall >
            {numberOfCards} Cards
          </TextDeskSmall>
        </View>
      </DeskContainer>
    </ TouchableOpacity >
  );
}


class DeckList extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  componentWillMount() {
    this.props.loadDeckList();
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  renderItem = ({ item }) => {
    return <Desk
      key={item.key}
      decKey={item.key}
      title={item.title}
      numberOfCards={item.questions.length}
    />;
  }

  render() {
    const { opacity } = this.state;
    const { decks } = this.props;

    const data = Object.keys(decks).map(key => {
      return { key, ...decks[key] };
    });

    return (

      <Container as={Animated.View} style={[{ opacity }]}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
        />

        <TouchableButtonGreen onPress={() => Actions.NewDeck()}>
          <Icon
            name="add-circle"
            color={white}
            size={40}
          />
          <TextDesk >
            NEW DECK
          </TextDesk>
        </TouchableButtonGreen>
      </Container>

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

