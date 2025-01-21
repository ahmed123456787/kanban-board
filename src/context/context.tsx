import { createContext, useReducer, ReactNode, useContext } from "react";

import {
  ActionType,
  CardContextType,
  ContainerContextType,
} from "../global.type";

const containerReducer = (
  state: ContainerContextType[],
  action: ActionType
): ContainerContextType[] => {
  switch (action.type) {
    case "ADD_CONTAINER":
      console.log(action.payload);
      return [...state, action.payload];

    case "REMOVE_CONTAINER":
      return state.filter((container) => container.id !== action.payload.id);

    case "ADD_CARD":
      return state.map((container) =>
        container.id === action.payload.containerId
          ? { ...container, cards: [...container.cards, action.payload] }
          : container
      );

    case "REMOVE_CARD":
      return state.map((container) =>
        container.id === action.payload.containerId
          ? {
              ...container,
              cards: container.cards.filter(
                (card) => card.id !== action.payload.id
              ),
            }
          : container
      );

    case "UPDATE_CARD":
      return state.map((container) =>
        container.id === action.payload.containerId
          ? {
              ...container,
              cards: container.cards.map((card) =>
                card.id === action.payload.id
                  ? { ...card, ...action.payload }
                  : card
              ),
            }
          : container
      );

    case "REORDER_CONTAINERS":
      return action.payload;

    default:
      return state;
  }
};

// Create Context
const CardContext = createContext<CardContextType | undefined>(undefined);

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [containers, dispatch] = useReducer(containerReducer, []);

  return (
    <CardContext.Provider value={{ containers, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
// Custom Hook for Using Context
const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export { CardProvider, useCardContext };
