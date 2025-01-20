import { useState } from "react";
import { Grip } from "lucide-react";
import CardEdit from "./CardEdit";

interface CardProps {
  card: {
    id: string;
    title: string;
    description?: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  return (
    <div className="px-3 py-2 rounded-lg shadow-md flex items-center justify-between">
      {showCardDetails && (
        <CardEdit setShowCardDetails={setShowCardDetails} card={card} />
      )}
      <p className="text-lg">{card.title}</p>
      <Grip size={24} onClick={() => setShowCardDetails(true)} />
    </div>
  );
};

export default Card;
