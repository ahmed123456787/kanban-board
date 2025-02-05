import { CreditCard } from "lucide-react";
import { getAllMembers } from "@/utils/filter";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Date from "../base/Date";
import Button from "../base/Button";

type AddCardProps = {
  boardName: string;
  onClose: () => void;
};

const AddCard = ({ boardName, onClose }: AddCardProps) => {
  const members = getAllMembers(useSelector((state: RootState) => state.cards));

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full grid grid-cols-2 gap-4">
        {/* Left Side: Inputs */}
        <div className="flex flex-col space-y-4">
          <CreditCard />
          <p className="text-xs">{boardName}</p>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 rounded-lg border border-slate-200"
          />
          <select className="w-full p-2 rounded-lg border border-slate-200">
            {members.map((member) => (
              <option key={member}>{member}</option>
            ))}
          </select>
          <textarea
            placeholder="Description"
            className="w-full p-2 rounded-lg border border-slate-200"
          />
          <Date />
        </div>

        {/* Right Side: Buttons */}
        <div className="flex flex-col space-y-3 items-end">
          <Button label={"Labels"} />
          <Button label={"Levels"} />
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full flex space-x-2 mt-4">
        <button
          className="w-full p-2 bg-blue-500 text-white rounded-lg"
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
      </div>
    </div>
  );
};

export default AddCard;
