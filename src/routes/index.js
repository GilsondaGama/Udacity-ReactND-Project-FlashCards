import { createAppContainer, createStackNavigator } from "react-navigation";

import DeckList from "../components/DeckList";
import NewDeck from "../components/NewDeck";
import DeckView from "../components/DeckView";
import AddCard from "../components/AddCard";
import QuizView from "../components/QuizView";

import { blue500, white } from '../../utils/colors';

const AppNavigator = createStackNavigator(
  {
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
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: `${blue500}`
      },
      headerTintColor: `${white}`
    }
  }
);

export default createAppContainer(AppNavigator);
