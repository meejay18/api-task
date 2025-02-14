import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Components/Router/Mainrouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;
