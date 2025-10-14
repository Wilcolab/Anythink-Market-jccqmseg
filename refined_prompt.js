/**
 * Converts a given string to camelCase format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * then converts the first word to lowercase and capitalizes the first letter
 * of each subsequent word, joining them together without separators.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is undefined, null, not a string, or an empty string.
 *
 * @example
 * camelCase("first name"); // returns "firstName"
 * camelCase("First-Name"); // returns "firstName"
 * camelCase("user_id"); // returns "userId"
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * converts all words to lowercase, and joins them using dots as separators.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is undefined, null, not a string, or an empty string.
 *
 * @example
 * dotCase("first name"); // returns "first.name"
 * dotCase("First-Name"); // returns "first.name"
 * dotCase("user_id"); // returns "user.id"
 */
function camelCase(input) {
    if (input === undefined || input === null) {
        throw new Error("Input cannot be undefined or null.");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string.");
    }
    if (input.trim() === "") {
        throw new Error("Input string cannot be empty.");
    }

    // Split by spaces, underscores, or hyphens
    const words = input
        .trim()
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error("Input string must contain at least one word.");
    }

    return (
        words[0].toLowerCase() +
        words
            .slice(1)
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join("")
    );
}

// Example usage:
// console.log(camelCase("first name")); // "firstName"
// console.log(camelCase("First-Name")); // "firstName"
// camelCase(3); // Throws error

function dotCase(input) {
    if (input === undefined || input === null) {
        throw new Error("Input cannot be undefined or null.");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string.");
    }
    if (input.trim() === "") {
        throw new Error("Input string cannot be empty.");
    }

    // Split by spaces, underscores, or hyphens
    const words = input
        .trim()
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        throw new Error("Input string must contain at least one word.");
    }

    return words.map(word => word.toLowerCase()).join(".");
}

// Example usage:
// console.log(dotCase("first name")); // "first.name"
// console.log(dotCase("First-Name")); // "first.name"
// dotCase(3); // Throws error

