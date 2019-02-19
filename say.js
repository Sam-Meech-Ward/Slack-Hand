const { exec } = require('child_process');

module.exports = function(word) {
  exec(`say "${word}"`);
}