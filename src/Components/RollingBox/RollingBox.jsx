import { useState } from "react";
import { useInterval } from 'usehooks-ts'
import { RollingBoxFace } from "./RollingBoxFace.jsx"
import {getInraduis, getDegreeSeperation} from "../../Utilities/geometrics.js";
import { 
    setHeightCss,
    setWidthCss,
    setTransitionCss,
    setRotateCss,
} from "../../Utilities/cssHelpers.js";
import "./RollingBox.scss";

export function RollingBox({height, width, sizeUnit = "px", rotationDuration, automatedRollingInterval = null, content}) {
    const [angle, setAngle] = useState(0);

    const numberOfSides = content.length;
    const inraduis = getInraduis(height, numberOfSides);
    const degreesOfSeperation = getDegreeSeperation(numberOfSides);

    const rollBox = () => {
        setAngle(angle - degreesOfSeperation);
    }

    const rollingBoxStyle = {
        width: setWidthCss(width, sizeUnit),
        height: setHeightCss(height, sizeUnit),
        transition: setTransitionCss(rotationDuration),
        transform: setRotateCss(angle),
    }

    useInterval(() => { rollBox() }, automatedRollingInterval);

    return (
        <div onClick={rollBox}>
            <div style={rollingBoxStyle} className="container">
                {content.map((child, index) => (
                    <RollingBoxFace
                        key={index}
                        child={child}
                        height={height}
                        width={width}
                        sizeUnit={sizeUnit}
                        inraduis={inraduis}
                        degreesOfSeperation={degreesOfSeperation}
                        side={index}
                    />
                ))}
            </div>
        </div>
    )
}
