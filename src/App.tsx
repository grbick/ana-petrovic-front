import { BrowserRouter } from "react-router-dom";
import { RoutesList } from "./router/RoutesList";
import { useAuth0 } from "@auth0/auth0-react";
import { observer } from "mobx-react-lite";
import Loader from "./components/Loader/Loader";

export const App = observer(() => {
  const { error, isLoading } = useAuth0();
  return !error && isLoading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  );
});

export default App;
