
exports.up = function(knex, Promise) {
    return knex.schema.createTable('jobs', (t) => {
        t.increments('id').primary();
        t.text('city');
        t.text('country');
        t.double('lat');
        t.double('lng');
        t.boolean('running').notNullable();
    }) 
}

exports.down = function(knex) {
    return knex.schema.dropTable('jobs');  
};
