function toKebabCase(str) {
    return str
        // Insert hyphen before uppercase letters (not at start)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Replace all non-alphanumeric characters (including spaces, underscores, etc.) with hyphen
        .replace(/[^a-zA-Z0-9]+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Collapse multiple hyphens into one
        .replace(/-+/g, '-')
        // Trim leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Example usages:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase("helloWorld")); // "hello-world"
// console.log(toKebabCase("APascalCaseString")); // "a-pascal-case-string"
// console.log(toKebabCase(" --IS_This-Weird?!__ ")); // "is-this-weird"
// console.log(toKebabCase("final-check--")); // "final-check"