exports.up = function (knex, Promise) {
  return knex.schema.createTable('cohort', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('food')
    table.string('hobbies')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cohort')
}
