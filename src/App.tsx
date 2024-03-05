import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./router/RoutesList";

function App() {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
