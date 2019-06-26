import { createAppContainer, createStackNavigator } from "react-navigation";

import DeckList from "../components/DeckList";
import NewDeck from "../components/NewDeck";
import DeckView from "../components/DeckView";
import AddCard from "../components/AddCard";
import QuizView from "../components/QuizView";

const AppNavigator = createStackNavigator({
  DeckList: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck
  },
  DeckView: {
    screen: DeckView
  },
  AddCard: {
    screen: AddCard
  },
  QuizView: {
    screen: QuizView
  }
});

export default createAppContainer(AppNavigator);
