
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohort').insert([
        {id: 1, name: 'Aidan', food: 'Pasta', hobbies: 'Playing video games'},
        {id: 2, name: 'Pou', food: 'Butter Chicken', hobbies: 'Fishing'},
        {id: 3, name: 'Kat', food: 'Edamame', hobbies: 'Hiking'}
      ])
    })
}
