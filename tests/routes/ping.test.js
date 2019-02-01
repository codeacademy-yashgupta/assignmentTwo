const server = require('./../../server');

describe('the ping route', () => {
  it('should respond with 200 for /GET (/ping)', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should respond with a string value \'pong\'', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof '');
    expect(response.result).toEqual('pong');
  });
});
