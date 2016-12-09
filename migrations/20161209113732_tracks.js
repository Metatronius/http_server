'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.createTable('tracks', (table) => {
        table.increments();
        table.text('name');
        table.integer('artist_id');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tracks');
};
