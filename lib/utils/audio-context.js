var ERROR = require('./error');

function AudioContext() {
    throw new Error(ERROR.UNSUPPORTED_FEATURE); // Throw until there is a viable AudioContext shim for Node.
}

module.exports = AudioContext;
