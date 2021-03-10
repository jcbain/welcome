
exports.up = function(knex, Promise) {
    return knex.schema.table('tweets', t => {
        t.text('query');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('tweets', t => {
        t.dropColumn('query')
    });
  
};
