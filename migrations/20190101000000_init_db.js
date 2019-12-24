const TABLE_NAME = 'table';

/**
 * Migration up
 * @param {import("knex")} knex
 * @returns {Promise}
 */
exports.up = async knex => {
  return knex.schema.createTable(TABLE_NAME, t => {
    t.increments('id')
      .unsigned()
      .primary();
    // Other table fields
  });
};

/**
 * Migration down
 * @param {import("knex")} knex
 * @returns {Promise}
 */
exports.down = async knex => {
  return knex.schema.dropTable(TABLE_NAME);
};
