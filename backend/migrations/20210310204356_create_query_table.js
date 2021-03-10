exports.up = function(knex, Promise) {
    return knex.schema.createTable('queries', (t) => {
                t.increments('id').primary();
                t.text('query').notNullable();
                t.unique(['query']);   
            })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('queries');
};
