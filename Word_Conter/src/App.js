import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState("");

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };

  return (
    <>
      <div className="bg-[#042743] w-[100vw] h-[100vh] text-white overflow-x-hidden">
        <Header />
        <div className="w-11/12 max-w-[1140px] mx-auto flex flex-col">
          <Alert alert={alert} />
          <MainContent showAlert={showAlert} />
        </div>
      </div>
    </>
  );
}

export default App;
