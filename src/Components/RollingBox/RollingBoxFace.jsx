import {
    setHeightCss,
    setWidthCss,
    setRotateCss,
    setTranslationCss
} from "../../Utilities/cssHelpers.js";

export function RollingBoxFace({child, height, width, inraduis, degreesOfSeperation, side}) {
    const angle = degreesOfSeperation * (side + 1);

    const style = {
        position: "absolute",
        height: setHeightCss(height),
        width: setWidthCss(width),
        transform: `${setRotateCss(angle)} ${setTranslationCss(inraduis, "Z")}`,
        backgroundColor: "white",
    }

    return (
        <div style={style}>
            <div className="center">
                {child}
            </div>
        </div>
    )
}