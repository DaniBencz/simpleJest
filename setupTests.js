// unless otherwise defined in the test file, this will get used
// global.fetch = require('cross-fetch');

let mockRes = {
  results: ['Luke', 'Leia', 'Han']
}

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(mockRes)
});