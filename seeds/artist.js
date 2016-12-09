'use strict';

exports.seed = (knex, Promise) => {
    return knex('artists')
        .del()
        .then(() => {
            return Promise.all([
                // Inserts seed entries
                knex('artists')
                .insert({
                    name: 'The Beatles'
                }),
                knex('artists')
                .insert({
                    name: 'The Flaming Lips'
                })
            ]);
        });
};
