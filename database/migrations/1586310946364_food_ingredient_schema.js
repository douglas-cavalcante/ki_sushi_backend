"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FoodIngredientSchema extends Schema {
  up() {
    this.create("food_ingredients", (table) => {
      table.increments();
      table
        .integer("food_id")
        .unsigned()
        .references("id")
        .inTable("foods")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("food_ingredients");
  }
}

module.exports = FoodIngredientSchema;
