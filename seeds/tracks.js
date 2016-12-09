'use strict';

exports.seed = (knex, Promise) => {
    return knex('tracks')
        .del()
        .then(() => {
            return Promise.all([
                // Inserts seed entries
                knex('tracks')
                .insert({
                    name: 'Strawberry Fields',
                    artist_id: 1
                }),
                knex('tracks')
                .insert({
                    name: 'Soft Bulletin',
                    artist_id: 2
                })
            ]);
        });
};
