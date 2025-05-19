import { useState } from "react";
import { X } from "lucide-react";

type LabelAddProps = {
  setIsLabelSelected: (isSelected: boolean) => void;
};

const LabelAdd = ({ setIsLabelSelected }: LabelAddProps) => {
  const [search, setSearch] = useState("");
  const labels = [
    { name: "High", color: "bg-red-500" },
    { name: "Medium", color: "bg-yellow-500" },
    { name: "Low", color: "bg-green-500" },
  ];

  // Filter the labels based on the search input
  const filteredLabels = labels.filter((label) =>
    label.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="absolute top-0 left-full ml-2 w-72 bg-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs">Labels</h3>
        <X
          className="w-4 h-4 hover:cursor-pointer"
          onClick={() => setIsLabelSelected(false)}
        />
      </div>
      <input
        type="text"
        placeholder="Search labels ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg border border-slate-200"
      />

      <div className="flex flex-col space-y-2">
        {filteredLabels.map((label) => (
          <label
            key={label.name}
            className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${label.color}`}
          >
            <input type="checkbox" className="form-checkbox" />
            {/* <span className="w-4 h-4 rounded-full bg-white"></span> */}
            <p className="text-white">{label.name}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LabelAdd;
