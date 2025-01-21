import { Dispatch, useState } from "react";
import { ActionType } from "../context/context";
import { v4 as uuidv4 } from "uuid";
import { CardType, ContainerContextType } from "../context/context";

type AddProps = {
  addTitle: string;
  addAction: Dispatch<ActionType>;
  actionType: ActionType["type"];
  setShowAddContainer: any;
  containerId: string;
};

const Add = ({
  addTitle,
  addAction,
  actionType,
  setShowAddContainer,
  containerId,
}: AddProps) => {
  const [addField, setAddField] = useState("");

  const handleAdd = () => {
    if (!addField.trim()) return; // Prevent adding empty fields

    if (actionType === "ADD_CONTAINER") {
      const payload: ContainerContextType = {
        id: uuidv4(),
        name: addField,
        cards: [],
      };

      addAction({ type: "ADD_CONTAINER", payload });
    } else if (actionType === "ADD_CARD") {
      const payload: CardType = {
        id: uuidv4(),
        title: addField,
        description: "", // Add default description if necessary
        containerId: containerId, // Replace with a dynamic containerId if needed
      };

      addAction({ type: "ADD_CARD", payload });
    }

    setShowAddContainer(false);
    setAddField("");
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-xl  border-2">
      <h3 className="text-2xl">{addTitle}</h3>
      <input
        type="text"
        value={addField}
        onChange={(e) => setAddField(e.target.value)}
        placeholder={`${addTitle}  Title`}
        className="p-2 mt-4 rounded-lg outline-black border-2"
      />
      <button
        onClick={handleAdd}
        className="bg-primary text-white rounded-lg px-4 py-1 mt-4"
      >
        Add {addTitle}
      </button>
    </div>
  );
};

export default Add;
