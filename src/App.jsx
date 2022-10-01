import { RollingBox } from "./Components/RollingBox/RollingBox.jsx"
import "./App.scss";

const arr = ["one","two","three"];

function App() {
  return (
    <div className="flex-container">
      <RollingBox height={40} width={200} rotationDuration={1} content={arr}/>
    </div>
  )
}

export default App
