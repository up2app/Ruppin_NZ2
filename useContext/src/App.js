import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./Context/userContext";
import MainLayout from "./Layouts/MainLayout";


function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <MainLayout />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
