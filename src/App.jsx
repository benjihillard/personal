import {useState} from "react"
import { RollingBox } from "./Components/RollingBox/RollingBox.jsx"
import "./App.scss";

const title = (text) => {
  return (
    <div className="center bold-border">
      <h1 className="text">{text}</h1>
    </div>
)};


function App() {
  const [count, setCount] = useState(3)
  const content = [];

  for (let i=0; i < count; i++) {
    content.push(title(i));
  }
  return (
    <div className="flex-container">
      <div onClick={() => {setCount(count + 1 )}}>
        {title("ADD")}
      </div>
      <RollingBox height={40} width={200} rotationDuration={0.5} content={content} automatedRollingInterval={3000}/>
      <div onClick={() => {setCount(count - 1 )}}>
        {title("Subtract")}
      </div>
    </div>
  )
}

export default App;
