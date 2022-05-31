import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MultiStepForm from "./components/dashboard/MultiStepForm";
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

      <MultiStepForm />
    
      <Player />

      <Login />
    </div>
  );
}

export default App;
