const Model = require('../../models');
// console.log(Model);
describe('generate', () => {
  beforeEach(async () => {
    await Model.book.truncate();
  });
  it('should insert name and the rating in the table', async () => {
    await Model.book.generate('Harry Potter and the Half-Blood Prince', '4.4');
    await Model.book.generate('Harry Potter', '4.7');
    await Model.book.generate('Harry Potter', '4.6');
    expect(await Model.book.count()).toEqual(3);
  });
  it('should return zero when no value is inserted', async () => {
    expect(await Model.book.count()).toEqual(0);
  });
});


afterAll(() => {
  Model.book.sequelize.close();
});
