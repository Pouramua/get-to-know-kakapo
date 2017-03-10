
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohort').insert([
        {id: 1, name: 'Aidan', food: 'Pasta', hobbies: 'Playing video games', birthday: '13/06/1995'},
        {id: 2, name: 'Pou', food: 'Butter Chicken', hobbies: 'Fishing', birthday: '11/08/1997'},
        {id: 3, name: 'Kat', food: 'Edamame', hobbies: 'Hiking', birthday: '03/09/1988'}
      ])
    })
}
