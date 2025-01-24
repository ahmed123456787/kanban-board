// import KanbanPage from "./pages/KanbanPage";
import { CardProvider } from "./context/context";
import Layout from "./components/home/Layout";

function App() {
  return (
    <>
      <CardProvider>
        <Layout>
          <div>hello data</div>
        </Layout>
      </CardProvider>
    </>
  );
}

export default App;
