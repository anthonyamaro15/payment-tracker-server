exports.up = function (knex) {
  return knex.schema.createTable("tracker", (table) => {
    table.increments();
    table.string("card_type", 255).notNullable();
    table.string("account", 255).notNullable();
    table.integer("amount").notNullable();
    table.string("store_name", 255).notNullable();
    table.timestamp("created_at").default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tracker");
};
