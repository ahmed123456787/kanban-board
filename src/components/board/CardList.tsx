import { Card } from "./../../redux/CardsSlice";

interface CardListProps {
  cards: Card[];
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="flex w-full ">
      {cards.map((card) => (
        <div key={card.id} className="bg-white p-2 m-2 rounded-md shadow-md">
          <p>{card.title}</p>
          <p>{card.label.name}</p>
          <p>{card.levelDifficulty}</p>
          <p>{card.dueDate.toDateString()}</p>
          <p className="">{card.comments.length}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
