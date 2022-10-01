import Logger from 'js-logger';

const validAxes = ["X","Y","Z"];
const validUnits = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", 
                    "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin",
                    "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh"]

export const isValidUnit = (unit) => {
    if (validUnits.includes(unit)) {
        return true;
    }
    return false;
}

export const isValidAxis = (axis) => {
    if (validAxes.includes(axis)) {
        return true;
    }
    return false;
}

export const setTranslationCss = (distance = 0, axis = "X", unit = "px") => {
    if (isValidUnit(unit)) {Logger.error(`In setTranslation, Unit:${unit} is not valid unit`)}
    if (isValidAxis(axis)) {Logger.error(`In setTranslation, Axis:${axis} is not valid axis`)}
    return `translate${axis}(${distance}${unit})`;
}

export const setRotateCss = (angle = 0, axis = "X", unit = "deg") => {
    if (isValidUnit(unit)) {Logger.error(`In setRotateCss, Unit:${unit} is not valid unit`)}
    if (isValidAxis(axis)) {Logger.error(`In setRotateCss, Axis:${axis} is not valid axis`)}
    return `rotate${axis}(${angle}${unit})`;
}

export const setTransitionCss = (duration = 1, subject = "transform", scale = "linear") => {
    console.log();
    return `${duration}s ${subject} ${scale}`;
}

export const setHeightCss = (height = 100, unit = "px") => {
    return `${height}${unit}`;
}

export const setWidthCss = (width = 100, unit = "px") => {
    return `${width}${unit}`;
}
