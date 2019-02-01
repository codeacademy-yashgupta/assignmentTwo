const server = require('./../../server');

describe('the insert book route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/insertBooks',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(201);
  });
  it('should respond with a string value \'Inserted into database\'', async () => {
    const options = {
      method: 'GET',
      url: '/insertBooks',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('Inserted into Database');
  });
});
