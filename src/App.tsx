import { BarraDePesquisa } from "./components/BarraDePesquisa";
import { SideBar } from "./components/SideBar";
import "./App.css";

function App() {

  return (
    <div className="container">
      <SideBar />
      <BarraDePesquisa />
    </div>
  );
}

export default App
