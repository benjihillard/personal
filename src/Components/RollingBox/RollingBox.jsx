import { useState } from "react";
import {getInraduis, getDegreeSeperation} from "../../Utilities/geometrics.js";
import { 
    setHeightCss,
    setWidthCss,
    setTransitionCss,
    setRotateCss,
} from "../../Utilities/cssHelpers.js";
import { RollingBoxFace } from "./RollingBoxFace.jsx"
import "./RollingBox.scss";

export function RollingBox({height, width, rotationDuration, content}) {
    const [angle, setAngle] = useState(0)

    const numberOfSides = content.length;
    const inraduis = getInraduis(height, numberOfSides);
    const degreesOfSeperation = getDegreeSeperation(numberOfSides);

    const rollBox = () => {
        setAngle(angle - degreesOfSeperation);
    }

    const rollingBoxStyle = {
        width: setWidthCss(width),
        height: setHeightCss(height),
        transition: setTransitionCss(rotationDuration),
        transform: setRotateCss(angle),
    }
    
    return (
        <div onClick={rollBox}>
            <div style={rollingBoxStyle} className="container">
                {content.map((val, index) => (
                    <RollingBoxFace
                        key={index}
                        title={val}
                        height={height}
                        width={width}
                        inraduis={inraduis}
                        degreesOfSeperation={degreesOfSeperation}
                        side={index}
                    />
                ))}
            </div>
        </div>
    )
}
