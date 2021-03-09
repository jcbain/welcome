
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {id: 1, city: 'Montreal', country: 'CA', lat: 45.5017, lng: -73.5673, running: false},
        {id: 2, city: 'Vancouver', country: 'CA', lat: 49.2827, lng: -123.1207, running: false},
        {id: 3, city: 'Toronto', country: 'CA', lat: 43.6532, lng: -79.3832, running: false},
      ]);
    });
};
