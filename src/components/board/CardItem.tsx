import { Card } from "./../../redux/CardsSlice";
import { Ellipsis, Flag, Clock5 } from "lucide-react";
import clsx from "clsx";

interface CardItemProps {
  card: Card;
}

const CardItem = ({ card }: CardItemProps) => {
  return (
    <div key={card.id} className="w-full p-4 space-y-2 bg-white rounded-2xl">
      {/* The label section */}
      <div className="flex justify-between">
        <p className={`text-${card.label.color}-300 text-red-400`}>
          {card.label.name}
        </p>
        <Ellipsis className="hover:cursor-pointer" />
      </div>
      <p className="text-xl font-semibold">{card.title}</p>
      <p className="text-slate-400 text-sm">{card.owner}</p>
      <p className="block text-slate-400">{card.description}</p>
      {/* The priority level and deadline section */}
      <div className="flex items-center space-x-2">
        <div
          className={clsx(
            "flex rounded-lg items-center space-x-1 p-1",
            card.levelDifficulty === "high" ? "text-red-900" : "",
            card.levelDifficulty === "high" ? "bg-red-200" : ""
          )}
        >
          <Flag className="text-xs" />
          <p>{card.levelDifficulty}</p>
        </div>
        <div className="flex text-xs p-1 space-x-1 rounded-md bg-slate-200">
          <Clock5 />
          <p>
            {card.dueDate.toLocaleString("default", { month: "long" })} (
            {card.dueDate.getMonth() + 1})
          </p>
        </div>
      </div>
      <p>{card.comments.length}</p>
    </div>
  );
};

export default CardItem;
