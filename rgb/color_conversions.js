// rgb to hex
function hexer(color) {
    var hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + hexer(r) + hexer(g) + hexer(b);
}
