import "./BorderBox.scss";

export function BorderBox ({text = "", borderColor = "black", borderRadius = "0px"}) {
    const boxFaceStyle = {
        borderColor,
        borderRadius,
    }

    return (
        <div style={boxFaceStyle} className="box-face">
            <h1 className="box-face-text futura">{text}</h1>
        </div>
    )
}