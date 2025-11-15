/**
 * Calculate the normalized difference between two strings.
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {number} - Normalized difference in range [0, 1].
 */
function stringDifference(str1, str2) {
    if (str1 === str2) return 0;

    const len1 = str1.length;
    const len2 = str2.length;
    const lengthDiff = Math.abs(len1 - len2);

    // Early exit for strings with significant length difference
    // if (lengthDiff > 3) return 1;

    const maxLength = Math.max(len1, len2);

    // Count different characters in aligned positions
    let diffCount = 0;
    for (let i = 0; i < Math.min(len1, len2); i++) {
        if (str1[i] !== str2[i]) diffCount++;
    }
    // Normalized measure of the difference between two strings:
    // 0 == equal
    // 1 == completely different
    const normDiff = (lengthDiff + diffCount) / maxLength;

    // Initialize Levenshtein distance matrix
    const distMatrix = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
    for (let i = 0; i <= len1; i++) distMatrix[i][0] = i;
    for (let j = 0; j <= len2; j++) distMatrix[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            distMatrix[i][j] = Math.min(
                distMatrix[i - 1][j] + 1,     // deletion
                distMatrix[i][j - 1] + 1,     // insertion
                distMatrix[i - 1][j - 1] + cost // substitution
            );
        }
    }

    // The value distMatrix[len1][len2] is the value in the bottom-right cell of the matrix,
    // representing the minimum edit distance between the two strings.
    //
    // The '1.01' value is a small penalty designed to ensure that the minimum distance
    // between for example 'NGC 251' matches first with 'NGC 2516' over 'NGC 2251'
    const normLevenshtein = (distMatrix[len1][len2] / maxLength) * 1.01;

    return Math.min(normDiff, normLevenshtein);
}

// Export for usage in other JS files
export { stringDifference };
