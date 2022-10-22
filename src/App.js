import { useState, useEffect} from "react";
import Header from "./components/Header";
import "./App.css";



function App() {

  const [data, setData] = useState([{"city":"default"}])

  useEffect(() => {
    fetch("stays.json")
    .then(res => res.json())
    .then(json => setData(json))
  }, []);

  return (
    <div className="App">
      <Header data={data}/>
    </div>
  );
}

export default App;
