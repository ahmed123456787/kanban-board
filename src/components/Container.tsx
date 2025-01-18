import { ContainerContextType } from "../context";
import { useCardContext } from "../context";

interface ContainerProps {
  container: ContainerContextType;
}

const Contain = ({ container }: ContainerProps) => {
  const { dispatch } = useCardContext();
  return (
    <div className="bg-gray-100 p-4 rounded-lg ">
      <div className="flex justify-between">
        <h3 className="text-md">{container.name}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-ellipsis-vertical hover:cursor-pointer"
          onClick={() =>
            dispatch({ type: "REMOVE_CONTAINER", payload: container })
          }
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </div>
      <div className="mt-4">
        {container.cards.map((card) => (
          <div key={card.id} className="bg-gray-100 p-2 rounded-lg mt-2">
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contain;
