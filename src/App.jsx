import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Player from "./components/player/Player";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Player />
      </Container>
      <Login />
    </div>
  );
}

export default App;
