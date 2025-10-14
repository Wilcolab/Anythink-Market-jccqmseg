function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]/, c => c.toLowerCase());
}

// Example usage:
console.log(toCamelCase("The Quick_Brown Fox")); // "theQuickBrownFox"