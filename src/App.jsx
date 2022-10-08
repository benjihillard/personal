import { NestingText } from "./Components/NestingText/NestingText.jsx";
import {
  aboveContent,
  belowContent,
  endContent
} from "./Components/NestingText/NestingTextDemoContent.jsx"
import { BusinessCardFrame } from "./Components/BusinessCardFrame/BusinessCardFrame.jsx";
import "./App.scss";

/**
 *         
 * <NestingText
      size={5}
      unit={"rem"}
      aboveContent={aboveContent}
      belowContent={belowContent}
      endContent={endContent}
    />
 */

function App() {
  return (
    <BusinessCardFrame/>
  )
}

export default App;
