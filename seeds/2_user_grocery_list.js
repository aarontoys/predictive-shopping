
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
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'eggs'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1864,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'milk'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1865,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'bread'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1866,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'peanut butter'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1867,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'jam'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 1,
      grocery_id: 1868,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'cake'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 2,
      grocery_id: 1869,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'toilet paper'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 2,
      grocery_id: 1870,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'shampoo'
    })
  })
  .then(function () {
    return knex('user_grocery_items').insert({
      user_id: 2,
      grocery_id: 1871,
      repeat_interval: 4,
      repeat_freq: 'days',
      semantic_name: 'soap'
    })
  })

};
