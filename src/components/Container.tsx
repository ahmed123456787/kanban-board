import React, { useState } from "react";
import { ContainerContextType } from "../global.type";
import { useCardContext } from "../context/context";
import { EllipsisVertical } from "lucide-react";
import Add from "./Add";
import clsx from "clsx";
import Card from "./Card";

interface ContainerProps {
  container: ContainerContextType;
}

const Container: React.FC<ContainerProps> = ({ container }) => {
  const [showEditOptions, setShowEditOptions] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [height, setHeight] = useState(44);
  const { dispatch } = useCardContext();

  return (
    <div
      className={clsx(
        "flex flex-col bg-gray-100 p-4 rounded-lg shadow-md  relative",
        height
      )}
    >
      {showAddCard && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-30 ">
          <Add
            addTitle="Card"
            addAction={dispatch}
            actionType="ADD_CARD"
            setShowAddContainer={setShowAddCard}
            containerId={container.id}
          />
        </div>
      )}
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">{container.name}</h3>
        <EllipsisVertical
          className="hover:cursor-pointer"
          onMouseEnter={() => setShowEditOptions(true)}
          onMouseLeave={() => setShowEditOptions(false)}
        />
      </div>

      {showEditOptions && (
        <div
          className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg"
          onMouseEnter={() => setShowEditOptions(true)}
          onMouseLeave={() => setShowEditOptions(false)}
        >
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              // Handle edit action
            }}
          >
            Edit
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
            onClick={() => {
              dispatch({ type: "REMOVE_CONTAINER", payload: container });
            }}
          >
            Delete
          </button>
        </div>
      )}

      <div className="mt-4 flex-grow">
        {container.cards.map((card) => (
          <div key={card.id} className=" bg-white rounded-lg mb-4">
            <Card card={card} />
          </div>
        ))}
      </div>

      <button
        className=" bg-primary text-white rounded-lg px-4 py-1 mt-2"
        onClick={() => setShowAddCard(true)}
      >
        Add Card
      </button>
    </div>
  );
};

export default Container;
