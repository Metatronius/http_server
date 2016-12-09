'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.createTable('artists', (table) => {
        table.increments();
        table.text('name');
        table.timestamps(true, true);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('artists');
};
