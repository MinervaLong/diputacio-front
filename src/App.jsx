import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />

      <Login />
    </div>
    </BrowserRouter>
  );
}

export default App;
