import { useEffect, useState } from "react";
import { useCardContext } from "./context";
import Container from "./components/Container";
import Add from "./components/Add";

const KanbanPage = () => {
  const { containers, dispatch } = useCardContext();
  const [showAddContainer, setShowAddContainer] = useState(false);

  useEffect(() => {
    dispatch({
      type: "ADD_CONTAINER",
      payload: { id: 3, name: "To Do", cards: [] },
    });
    console.log(containers);
  }, [dispatch]);

  return (
    <div className="relative">
      {/* Add Container Modal */}
      {showAddContainer && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <Add
            addTitle="Container"
            addAction={() => {
              setShowAddContainer(false);
              dispatch;
            }}
            actionType="ADD_CONTAINER"
          />
        </div>
      )}
      {/* Page Content */}
      <div
        className={`flex flex-col h-screen mx-12 mt-8 ${
          showAddContainer ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="flex justify-between">
          {/* Top header */}
          <h2 className="font-semibold text-3xl">Track Your Activity</h2>
          <button
            className="bg-primary text-white rounded-lg px-4 py-2"
            onClick={() => setShowAddContainer(!showAddContainer)}
          >
            Add Container
          </button>
        </div>
        {/* Container Section */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {containers.map((container) => (
            <Container key={container.id} container={container} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanPage;
