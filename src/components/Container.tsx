import React, { useState } from "react";
import { ContainerContextType } from "../context";
import { useCardContext } from "../context";
import Add from "./Add";
import clsx from "clsx";
import Card from "./Card";

interface ContainerProps {
  container: ContainerContextType;
}

const Container: React.FC<ContainerProps> = ({ container }) => {
  const { dispatch } = useCardContext();
  const [showEditOptions, setShowEditOptions] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [height, setHeight] = useState(44);
  return (
    <div
      className={clsx(
        "flex flex-col bg-gray-100 p-4 rounded-lg shadow-md  relative",
        height
      )}
    >
      {showAddCard && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-ellipsis-vertical hover:cursor-pointer"
          onMouseEnter={() => setShowEditOptions(true)}
          onMouseLeave={() => setShowEditOptions(false)}
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
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
            <Card card={card} containerId={container.id} />
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
