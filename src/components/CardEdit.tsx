import { AppWindow, Trash2, AlignLeft } from "lucide-react";
import { CardType } from "../global.type";
import { useCardContext } from "../context/context";

interface CardEditProps {
  setShowCardDetails: any;
  card: CardType;
}

const CardEdit = ({ setShowCardDetails, card }: CardEditProps) => {
  const { containers, dispatch } = useCardContext();

  const getContainerById = (containerId: string) =>
    containers.find((container) => container.id === containerId);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 border-2 border-gray-200">
        <div className="flex justify-between  items-center">
          <div className="flex items-center gap-x-2">
            <AppWindow />
            <p className="font-semibold text-lg ">Optimization</p>
          </div>
          <Trash2
            className="bg-secondary text-purple-800  w-8 h-8 p-2 rounded-lg hover:cursor-pointer"
            onClick={() => dispatch({ type: "REMOVE_CARD", payload: card })}
          />
        </div>
        <p className="ml-5 text-gray-400 text-sm mb-4">
          {"is list in "}
          {getContainerById(card.containerId)?.name}
        </p>
        <div className="flex items-center gap-2">
          <AlignLeft />
          <h2>Card Title</h2>
        </div>
        <input
          type="text"
          placeholder="Card Title"
          className="w-full p-2 mt-4 rounded-lg  outline-black border-2"
          onChange={(e) => {
            card.title = e.target.value;
          }}
        />
        <div className="flex mt-4 gap-3 w-full justify-between ">
          <button
            className="bg-secondary px-2 py-1 w-1/2 rounded-lg"
            onClick={() => setShowCardDetails(false)}
          >
            Cancel
          </button>
          <button
            className="bg-primary px-2 py-1 w-1/2 rounded-lg"
            onClick={() => {
              dispatch({ type: "UPDATE_CARD", payload: card });
              setShowCardDetails(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
