import { Dispatch, useState } from "react";
import { ActionType } from "../context";

type AddProps = {
  addTitle: string;
  addAction: Dispatch<ActionType>;
  actionType: ActionType["type"];
};

const Add = ({ addTitle, addAction, actionType }: AddProps) => {
  const [addfield, setAddField] = useState("");

  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <h3 className="text-2xl">{addTitle}</h3>
      <input
        type="text"
        value={addfield}
        onChange={(e) => setAddField(e.target.value)}
        className="p-2 mt-4 rounded-lg"
      />
      <button
        onClick={() => {
          addAction({
            type: "ADD_CONTAINER",
            payload: { id: 4, name: addfield, cards: [] },
          });

          setAddField("");
        }}
        className="bg-primary text-white rounded-lg px-4 py-2 mt-4"
      >
        Add {addTitle}
      </button>
    </div>
  );
};

export default Add;
