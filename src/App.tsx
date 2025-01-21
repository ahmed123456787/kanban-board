import KanbanPage from "./KanbanPage";
import { CardProvider } from "./context/context";

function App() {
  return (
    <>
      <CardProvider>
        <KanbanPage />
      </CardProvider>
    </>
  );
}

export default App;
