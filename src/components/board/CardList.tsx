import { Card } from "./../../redux/CardsSlice";
import CardItem from "./CardItem";

interface CardListProps {
  cards: Card[];
}

const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="flex flex-col space-y-5 w-full ">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
