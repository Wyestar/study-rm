// rgb to hex
function hexer(color) {
    var hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + hexer(r) + hexer(g) + hexer(b);
}

// rgb to binary
// can shift red >> 16
// shift green >> 8
// dont shift blue, simple xor?


// html colors
