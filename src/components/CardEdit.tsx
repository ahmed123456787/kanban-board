import { AppWindow, Trash2, AlignLeft } from "lucide-react";

interface CardEditProps {
  setShowCardDetails: any;
  card: {
    id: string;
    title: string;
    description?: string;
  };
}

const CardEdit = ({ setShowCardDetails, card }: CardEditProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between  items-center">
          <div className="flex items-center gap-2">
            <AppWindow />
            <p className="font-semibold text-lg ">Optimization</p>
          </div>
          <Trash2 className="bg-secondary text-purple-800  w-8 h-8 p-2 rounded-lg" />
        </div>
        <div className="flex items-center gap-2">
          <AlignLeft />
          <h2>Card Title</h2>
        </div>
        <input
          type="text"
          className="w-full p-2 mt-4 rounded-lg outline-black border-2"
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
            onClick={() => setShowCardDetails(false)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
