
exports.seed = function(knex, Promise) {
  // return Promise.join(
  //   // Deletes ALL existing entries
  //   knex('table_name').del(),

  //   // Inserts seed entries
  //   knex('table_name').insert({id: 1, colName: 'rowValue'}),
  //   knex('table_name').insert({id: 2, colName: 'rowValue2'}),
  //   knex('table_name').insert({id: 3, colName: 'rowValue3'})
  // );
  return knex('user_grocery_items').del()
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1863,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',1]),
      semantic_name: 'eggs'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1864,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',2]),
      semantic_name: 'milk'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1865,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',3]),
      semantic_name: 'bread'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1866,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',4]),
      semantic_name: 'peanut butter'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1867,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',5]),
      semantic_name: 'jam'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1868,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-14T19:46:14.684Z',31]),
      semantic_name: 'cake'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 2,
      grocery_id: 1869,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',3]),
      semantic_name: 'toilet paper'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 2,
      grocery_id: 1870,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',3]),
      semantic_name: 'shampoo'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 2,
      grocery_id: 1871,
      schedule_type: 1,
      schedule: JSON.stringify(['2016-05-06T19:46:14.684Z',3]),
      semantic_name: 'soap'
    })
  })

};
