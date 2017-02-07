export function em(currentFontSize, rootFontSize = 16) {
    return `${currentFontSize / rootFontSize}em`;
}

export function rem(currentFontSize, rootFontSize = 16) {
    return `${currentFontSize / rootFontSize}em`;
}

export function per(currentComponentSize, rootComponentSize = 1) {
    return `${rootComponentSize / currentComponentSize}em`;
}
