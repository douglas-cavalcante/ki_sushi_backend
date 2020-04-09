"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Food extends Model {
  category() {
    return this.belongsTo("App/Models/Category");
  }

  ingredients() {
    return this.belongsToMany("App/Models/Ingredient").pivotModel(
      "App/Models/FoodIngredient"
    );
  }

  file() {
    return this.belongsTo("App/Models/File");
  }
}

module.exports = Food;
