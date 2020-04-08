"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FoodSchema extends Schema {
  up() {
    this.create("foods", (table) => {
      table.increments();
      table
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table.string("description");
      table.string("sub_description");
      table.float("price");
      table.timestamps();
    });
  }

  down() {
    this.drop("foods");
  }
}

module.exports = FoodSchema;
