import { Board } from "../redux/CardsSlice";

export const getAllMembers = (boards: Board[]) => {
  let members: string[] = [];
  boards.forEach((board) => {
    board.cards.forEach((element) => {
      members.push(element.owner);
    });
  });

  return members;
};
