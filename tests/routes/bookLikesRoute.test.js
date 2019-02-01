const server = require('./../../server');

describe('the book opinion route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/bookOpinion/10/1',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should respond with a string value \'Liked book with id\'', async () => {
    const options = {
      method: 'GET',
      url: '/bookOpinion/10/1',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('Liked book with id 10');
  });
  it('should respond with a string value \'Disiked book with id\'', async () => {
    const options = {
      method: 'GET',
      url: '/bookOpinion/10/0',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('Disliked book with id 10');
  });
});
