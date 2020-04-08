"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class FoodIngredient extends Model {
  category() {
    return this.hasOne("App/Models/Food");
  }
}

module.exports = FoodIngredient;
