import { createSlice } from "@reduxjs/toolkit";

export type Card = {
  id: string;
  title: string;
  label: {
    name: string;
    color: string;
  };
  levelDifficulty: "low" | "medium" | "high";
  dueDate: Date;
  comments: string[];
};

type Board = {
  cards: Card[];
  name: string;
};

const initialState: Board[] = [
  {
    name: "To Do",
    cards: [
      {
        id: "1",
        title: "def",
        label: { name: "dev", color: "red" },
        levelDifficulty: "low",
        dueDate: new Date("2012-12-12"),
        comments: [],
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
