// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'db',
      user : 'postgres',
      password : 'postgres',
      database : 'twitter',
    },
    migrations: {
      directory:'./migrations',
      tableName: 'knex_migrations'
    }
  },
};
