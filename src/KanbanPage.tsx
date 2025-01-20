import { useState } from "react";
import { useCardContext } from "./context";
import Container from "./components/Container";
import Add from "./components/Add";

const KanbanPage = () => {
  const { containers, dispatch } = useCardContext();
  const [showAddContainer, setShowAddContainer] = useState(false);

  // useEffect(() => {}, [dispatch]);

  return (
    <div className="relative ">
      {/* Add Container Modal */}
      {showAddContainer && (
        <div className="absolute  w-full h-full flex justify-center items-center z-50">
          <Add
            addTitle="Container"
            addAction={dispatch}
            actionType="ADD_CONTAINER"
            setShowAddContainer={setShowAddContainer}
            containerId=""
          />
        </div>
      )}
      {/* Page Content */}
      <div
        className={`flex flex-col bg-white h-screen px-3 md:px-12 pt-8 transition-opacity duration-300 ${
          showAddContainer
            ? "blur-sm opacity-40 bg-gray-200 pointer-events-none"
            : ""
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Top header */}
          <h2 className="font-semibold text-sm md:text-xl">
            Track Your Activity
          </h2>
          <button
            className="bg-primary text-white text-sm rounded-lg px-3 py-2"
            onClick={() => setShowAddContainer(!showAddContainer)}
          >
            Add Container
          </button>
        </div>
        {/* Container Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-4 mt-8">
          {containers.map((container) => (
            <Container key={container.id} container={container} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanPage;
