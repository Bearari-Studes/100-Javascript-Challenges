function rgbParaHex(r, g, b) {
    return '#' + [r,g,b].map(x => {
        const hex = Math.max(0, Math.min(255, x)).toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')
}

console.log(rgbParaHex(255, 0, 128))