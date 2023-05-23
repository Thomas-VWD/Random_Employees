import axios from "axios";
import { useState } from "react";
import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";

function App() {
  const getEmployee = () => {
    axios.get("https://randomuser.me/api?nat=en").then((response) => {
      setEmployee(response.data.results[0]);
    });
  };

  const [employee, setEmployee] = useState(null);

  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
