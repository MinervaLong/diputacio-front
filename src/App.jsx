import "./App.css";
import MultiStepForm from "./components/dashboard/MultiStepForm";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Player from "./components/player/Player";

function App() {
  return (
    <div className="App">
      <Header />

      <MultiStepForm />
    
      <Player />

      <Login />
    </div>
  );
}

export default App;
