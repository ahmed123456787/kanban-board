import { CreditCard } from "lucide-react";

type AddCardProps = {
  boardName: string;
  onClose: () => void;
};

const AddCard = ({ boardName, onClose }: AddCardProps) => {
  console.log(boardName);
  return (
    <>
      <CreditCard />
      <h2 className="text-xl mb-4">Create a New Card</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-4 rounded-lg border border-slate-200"
      />
      <input
        type="text"
        placeholder="Owner"
        className="w-full p-2 mb-4 rounded-lg border border-slate-200"
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 mb-4 rounded-lg border border-slate-200"
      />
      <button
        className="w-full p-2 bg-blue-500 text-white rounded-lg mb-2"
        onClick={onClose}
      >
        Submit
      </button>
      <button
        className="w-full p-2 bg-gray-500 text-white rounded-lg"
        onClick={onClose}
      >
        Cancel
      </button>
    </>
  );
};

export default AddCard;
