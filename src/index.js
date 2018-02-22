/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;

    for (var i = 0; i < preferences.length; i++) {
        if (preferences[i] === 0 || preferences[i] === i + 1) {
            continue;
        }
        if (preferences[preferences[preferences[i] - 1] - 1] === i + 1) {
            count++;
            preferences[i] = 0;
        }
    }

    return count;
};
