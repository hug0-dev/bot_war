const moves = ["UP", "DOWN", "LEFT", "RIGHT", "STAY"];
const actions = ["BOMB", "COLLECT", "NONE"];

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getBotAction() {
    return {
      move: getRandom(moves),
      action: getRandom(actions),
    };
}

module.exports = getBotAction;