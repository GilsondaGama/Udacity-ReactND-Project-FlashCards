import { AsyncStorage } from "react-native";

export const FLASHCARD_STORAGE_KEY = "MobileFlashcards:flashcards";

const dataStore = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  },
  Redux: {
    title: "Redux",
    questions: [
      {
        question: "What is Redux?",
        answer: "Redux is a predictable state container for JavaScript apps"
      }
    ]
  }
};

export function _saveDeck(newDeck) {
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(decksStored => {
    const decksJSON = JSON.parse(decksStored);
    const mergeDesks = { ...decksJSON, ...newDeck };
    AsyncStorage.setItem(
      FLASHCARD_STORAGE_KEY,
      JSON.stringify(mergeDesks),
      () => {
        AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(loggerResults);
      }
    );
  });
}

export function _getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(response => JSON.parse(response))
    .then(response => {
      return response !== null ? response : dataStore;
    });
}

export function _saveCardToDeck(decKey, card) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(decksStored => {
    const decks = JSON.parse(decksStored);
    decks[decKey].questions.push(card);
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
  });
}

export function clearStorage() {
  AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, "");
}

export function loggerResults(results) {
  console.log("Newdecks Stored [deckResults]: ", JSON.parse(results));
}
