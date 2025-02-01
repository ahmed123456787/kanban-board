import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CardList from "./board/CardList";
import { Plus } from "lucide-react";

const colorContainer = ["bg-red-300", "bg-blue-300", "bg-green-300"];

// Represent the whole board which contains many lists of cards
const CardBord = () => {
  const boards = useSelector((state: RootState) => state.cards);
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {boards.map((board, index) => (
        <div className="w-full flex flex-col" key={board.name}>
          <div
            className={`flex items-center rounded-xl justify-between p-2 ${colorContainer[index]}`}
          >
            <p className="rounded-2xl text-center pl-5 ">{board.name}</p>
            <button className="flex items-center justify-center p-2 rounded-full ">
              <Plus className="text-black" />
            </button>
          </div>
          <CardList key={board.name} cards={board.cards} />
        </div>
      ))}
    </div>
  );
};

export default CardBord;
