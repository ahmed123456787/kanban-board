import { Dispatch } from "react";

export type ContainerContextType = {
  id: string;
  name: string;
  cards: CardType[];
};

export type CardType = {
  id: string;
  title: string;
  description: string;
  containerId: string;
};

export type ContainerActionType =
  | {
      type: "ADD_CONTAINER" | "REMOVE_CONTAINER";
      payload: ContainerContextType;
    }
  | {
      type: "REORDER_CONTAINERS";
      payload: ContainerContextType[];
    };

export type CardActionType = {
  type: "ADD_CARD" | "REMOVE_CARD" | "UPDATE_CARD";
  payload: CardType;
};

export type ActionType = ContainerActionType | CardActionType;

export type CardContextType = {
  containers: ContainerContextType[];
  dispatch: Dispatch<ActionType>;
};
