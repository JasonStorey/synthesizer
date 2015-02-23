function AudioContext() {
    throw new Error('Unsupported environment'); // Throw until there is a viable AudioContext shim for Node.
}

module.exports = AudioContext;
