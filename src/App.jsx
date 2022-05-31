import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Player from "./components/player/Player";

function App() {
  return (
    <div className="App">
      <Header />
      <Player />
      <Login />
    </div>
  );
}

export default App;
