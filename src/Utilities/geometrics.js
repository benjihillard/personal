export const getTanFromDegrees = (degrees) => {
    return Math.tan(degrees * Math.PI / 180);
}

export const getApothem = (height, numberOfSides) => {
    const denominator = 2 * getTanFromDegrees(180/numberOfSides);
    const apothem = height / denominator;
    return apothem;
}

export const getPolygonArea = (height, numberOfSides) => {
    const apothem = getApothem(height, numberOfSides);
    const area = (height * numberOfSides * apothem) / 2;
    return area;
}

export const getSemiperimeter = (height, numberOfSides) => {
    return (height * numberOfSides) / 2;
}

export const getInraduis = (height, numberOfSides) => {
    const area = getPolygonArea(height, numberOfSides);
    const semiperimeter = getSemiperimeter(height, numberOfSides);
    return area / semiperimeter;
}

export const getDegreeSeperation = (numberOfSides) => {
    return 360 /numberOfSides;
}