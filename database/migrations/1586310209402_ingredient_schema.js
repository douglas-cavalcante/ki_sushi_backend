"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IngredientSchema extends Schema {
  up() {
    this.create("ingredients", (table) => {
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("ingredients");
  }
}

module.exports = IngredientSchema;
