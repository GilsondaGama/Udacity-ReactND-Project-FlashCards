import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import DeckList from "../components/DeckList";
import NewDeck from "../components/NewDeck";
import DeckView from "../components/DeckView";
import NewCard from "../components/NewCard";
import QuizView from "../components/QuizView";

import { blue500, white } from '../../utils/colors';

export default class Routes extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: `${blue500}` }}
        titleStyle={{ color: `${white}` }}>

        <Scene key='root'>
          <Scene key='DeckList' component={DeckList} title='Deck List' initial />
          <Scene key='NewDeck' component={NewDeck} title='New Deck' />
          <Scene key='DeckView' component={DeckView} title='Deck View' />
          <Scene key='NewCard' component={NewCard} title='Add Card' />
          <Scene key='QuizView' component={QuizView} title='Quiz View' />
        </Scene>
      </Router>
    );
  }
}