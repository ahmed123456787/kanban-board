import { Board } from "../redux/CardsSlice";
import { Label } from "../redux/CardsSlice";

export const getAllMembers = (boards: Board[]) => {
  let members: string[] = [];
  boards.forEach((board) => {
    board.cards.forEach((element) => {
      members.push(element.owner);
    });
  });

  return members;
};

export const getAllLabels = (boards: Board[]) => {
  let labels: Label[] = [];

  boards.forEach((elm) => {
    elm.cards.forEach((card) => {
      labels.push(card.label);
    });
  });
  return labels;
};
