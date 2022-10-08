import "./NestingText.scss";

const name = "Benji";

export const aboveTextCrevice = {
    position: {
        top: "0.6em",
        left: "1.3em",
    },
    size: {
        height: 0.3,
        width: 2.5,
        unit: "em"
    }
}

export const belowTextCrevice = {
    position: {
        top: "2.25em",
        left: "0.16em",
    },
    size: {
        height: 0.3,
        width: 3.73,
        unit: "em"
    }
}

export const endOfTextCrevice = {
    position: {
        top: "2.25em",
        left: "4.7em",
    },
    size: {
        height: 0.3,
        width: 0.378,
        unit: "em"
    }
}

export function NestingText({size, unit, aboveContent = null, belowContent = null, endContent = null}) {
    const fontSize = `${size}${unit}`;

    return (
        <div style={{fontSize: fontSize}} className="nesting-container">
            <h1 className="nesting-object futura">{name}</h1>
            <div style={aboveTextCrevice.position} className="nesting-object">
                {aboveContent}
            </div>
            <div style={belowTextCrevice.position} className="nesting-object">
                {belowContent}
            </div>
            <div style={endOfTextCrevice.position} className="nesting-object">
                {endContent}
            </div>
        </div>
    );
}