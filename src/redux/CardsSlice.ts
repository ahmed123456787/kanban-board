import { createSlice } from "@reduxjs/toolkit";

export type Label = {
  name: string;
  color: string;
};

export type Card = {
  id: string;
  title: string;
  owner: string;
  label: Label;
  levelDifficulty: "low" | "medium" | "high";
  dueDate: Date;
  comments: string[];
  description?: string;
};

export type Board = {
  cards: Card[];
  name: string;
};

const initialState: Board[] = [
  {
    name: "To Do",
    cards: [
      {
        id: "1",
        title: "Create a new project",
        owner: "John Doe",
        label: { name: "DEV", color: "blue" },
        levelDifficulty: "high",
        dueDate: new Date("2012-12-12"),
        comments: [],
        description:
          "This is a description for this card new baby is comming soon hello nigga for this time",
      },
      {
        id: "1",
        title: "Create a new project",
        owner: "Said Dando",
        label: { name: "DEV", color: "blue" },
        levelDifficulty: "high",
        dueDate: new Date("2012-12-12"),
        comments: [],
        description:
          "This is a description for this card new baby is comming soon hello nigga for this time",
      },
    ],
  },
  { name: "Done", cards: [] },
  { name: "Progress", cards: [] },
];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
