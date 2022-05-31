import "./App.css";
import MultiStepForm from "./components/dashboard/MultiStepForm";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <MultiStepForm />
      <Login />
    </div>
  );
}

export default App;
