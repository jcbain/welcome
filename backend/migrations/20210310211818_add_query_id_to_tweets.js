exports.up = function(knex, Promise) {
    return knex.schema.table('tweets', t => {
        t.dropColumn('query');
    })
    .then(() => {
        return knex.schema.table('tweets', t => {
            t.integer('query_id');
            t.foreign('query_id').references('id').inTable('queries');
        });

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.table('tweets', t => {
        t.dropColumn('query_id');
    })
    .then(() => {
        return knex.schema.table('tweets', t => {
            t.text('query');
        });

    })
};