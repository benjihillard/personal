import {
    setHeightCss,
    setWidthCss,
    setRotateCss,
    setTranslationCss
} from "../../Utilities/cssHelpers.js";

export function RollingBoxFace({child, height, width, sizeUnit, inraduis, degreesOfSeperation, side}) {
    const angle = degreesOfSeperation * (side + 1);

    const style = {
        position: "absolute",
        height: setHeightCss(height, sizeUnit),
        width: setWidthCss(width, sizeUnit),
        transform: `${setRotateCss(angle)} ${setTranslationCss(inraduis, "Z", sizeUnit)}`,
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