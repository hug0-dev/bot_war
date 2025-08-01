const getBotAction = require('./bot');

describe('bot', () => {
    const validMoves = ["UP", "DOWN", "LEFT", "RIGHT", "STAY"];
    const validActions = ["BOMB", "COLLECT", "NONE"];

    test('should return valid action', () => {
    const result = getBotAction();
    expect(validMoves).toContain(result.move);
    expect(validActions).toContain(result.action);
  });
});