import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CardList from "./board/CardList";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddCard from "./board/AddCard";

const colorContainer = ["bg-red-300", "bg-blue-300", "bg-green-300"];

type BoardName = "" | "To Do" | "In Progress" | "Done";

// Represent the whole board which contains many lists of cards

const CardBord = () => {
  const [addCard, setAddCard] = useState<{
    selected: boolean;
    name: BoardName;
  }>({ selected: false, name: "" });

  const boards = useSelector((state: RootState) => state.cards);

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {boards.map((board, index) => (
        <div className="w-full flex flex-col" key={board.name}>
          <div
            className={`flex items-center rounded-xl justify-between p-2 ${colorContainer[index]} mb-4`}
          >
            <p className="rounded-2xl text-center pl-5 ">{board.name}</p>
            <button
              className="flex items-center justify-center p-2 rounded-full"
              onClick={() =>
                setAddCard({ selected: true, name: board.name as BoardName })
              }
            >
              <Plus className="text-black" />
            </button>
          </div>
          <CardList key={board.name} cards={board.cards} />
        </div>
      ))}
      {/* The add card section */}
      {addCard.selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-white p-6 rounded-xl shadow-lg w-1/3">
            <AddCard
              boardName={addCard.name}
              onClose={() => setAddCard({ selected: false, name: "" })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBord;
