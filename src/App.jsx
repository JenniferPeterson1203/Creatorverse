
import { useRoutes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";
import FOUROFOUR from "./pages/FOUROFOUR";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/add", element: <AddCreator /> },
    { path: "*", element: <FOUROFOUR /> },
  ]);

    return (
    <div>
      <Dashboard />
      <main>{routes}</main>
      <Footer />
    </div>
  );
}

export default App;
