
exports.up = function(knex, Promise) {
    return knex.schema.table('tweets', t => {
        t.integer('job_id');
        t.foreign('job_id').references('id').inTable('jobs');    
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('tweets', t => {
        t.dropColumn('job_id')
    });
  
};