import { Provider } from "react-redux";
import "./App.css";
import { BaseLayout } from "./pages";
import { Dashboard } from "./pages/Dashboard";
import { reduxStore } from "./redux/store";

export const App = () => (
  <Provider store={reduxStore}>
    <BaseLayout>
      <Dashboard />
    </BaseLayout>
  </Provider>
);
