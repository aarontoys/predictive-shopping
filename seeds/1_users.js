
exports.seed = function(knex, Promise) {
  // return Promise.join(
  //   // Deletes ALL existing entries
  //   knex('table_name').del(),

  //   // Inserts seed entries
  //   knex('table_name').insert({id: 1, colName: 'rowValue'}),
  //   knex('table_name').insert({id: 2, colName: 'rowValue2'}),
  //   knex('table_name').insert({id: 3, colName: 'rowValue3'})
  // );
  return knex('users').del()
  .then(function () {
    return knex('users').insert({
      fname: 'Aaron',
      lname: 'Toys',
      email: 'aarontoys@gmail.com',
      pword: 'pass',
      shop_interval: 3,
      shop_freq: 'days'
    });
  })
  .then(function () {
    return knex('users').insert({
      fname: 'Nicki',
      lname: 'Toys',
      email: 'nickistruck@yahoo.com',
      pword: 'pass',
      shop_interval: 4,
      shop_freq: 'days'
    });
  });
};
