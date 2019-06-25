import { createAppContainer, createStackNavigator } from "react-navigation";

import DeckList from "../components/DeckList";
import NewDeck from "../components/NewDeck";
import DeckView from "../components/DeckView";
import AddCard from "../components/AddCard";
import QuizView from "../components/QuizView";

export default createAppContainer(
  createStackNavigator(
    {
      DeckList,
      NewDeck,
      DeckView,
      AddCard,
      QuizView
    },
    {
      //     initialRouteName: "DeckList",
      defaultNavigationOptions: {
        headerTintColor: "#000",
        headerTitle: "FlashCards",
        headerBackTitle: null
      },
      mode: "modal"
    }
  )
);
