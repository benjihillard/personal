import uuid from 'react-uuid';
import { RollingBox } from "../RollingBox/RollingBox.jsx";
import { BorderBox } from "../BorderBox/BorderBox.jsx";
import {
    aboveTextCrevice,
    belowTextCrevice,
    endOfTextCrevice,
} from "./NestingText.jsx";

const aboveTextContent = [];
aboveTextContent.push(<BorderBox text={"About"}/>);
aboveTextContent.push(<BorderBox text={"Contact"}/>);
aboveTextContent.push(<BorderBox text={"Projects"}/>);
aboveTextContent.push(<BorderBox text={"Stack"}/>);

export const aboveContent= (
    <RollingBox 
        key={uuid()}
        height={aboveTextCrevice.size.height}
        width={aboveTextCrevice.size.width}
        sizeUnit={aboveTextCrevice.size.unit}
        rotationDuration={3}
        automatedRollingInterval={3000}
        content={aboveTextContent}
    />
)

const belowTextContent = [];
belowTextContent.push(<BorderBox text={"Fullstack Developer"}/>);
belowTextContent.push(<BorderBox text={"Learn More"}/>);
belowTextContent.push(<BorderBox text={"Project"}/>);

export const belowContent = (
    <RollingBox
        key={uuid()}
        height={belowTextCrevice.size.height}
        width={belowTextCrevice.size.width}
        sizeUnit={belowTextCrevice.size.unit}
        rotationDuration={1}
        automatedRollingInterval={3000}
        content={belowTextContent}
    />
) 

const endOfTextContent = [];
endOfTextContent.push(<BorderBox borderRadius={"99px"}/>);
endOfTextContent.push(<BorderBox borderRadius={"99px"}/>);

export const endContent = (
    <RollingBox 
        key={uuid()}
        height={endOfTextCrevice.size.height}
        width={endOfTextCrevice.size.width}
        sizeUnit={endOfTextCrevice.size.unit}
        rotationDuration={2}
        automatedRollingInterval={3000}
        content={endOfTextContent}
    />
)